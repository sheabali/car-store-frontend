import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { TUser, useCurrentToken } from '@/redux/features/auth/authSlice';
import verifyTokens from '../utils/verifyToken';
import { sidebarItemsGenerator } from '@/utils/sidebarItemsGenerator';
import adminPaths from '@/routes/admin.routes';
import userPaths from '@/routes/user.routes';

const userRole = {
  ADMIN: 'admin',
  USER: 'user',
};

export function AppSidebar() {
  const token = useAppSelector(useCurrentToken);
  let user;

  if (token) {
    user = verifyTokens(token);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let sidebarItems: any[] = [];

  if (user) {
    switch ((user as TUser).role) {
      case userRole.ADMIN:
        sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
        break;
      case userRole.USER:
        sidebarItems = sidebarItemsGenerator(userPaths, userRole.USER);
        break;
      default:
        sidebarItems = [];
    }
  }

  console.log('Generated Sidebar Items:', sidebarItems);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.length ? (
                sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        {item.icon && <item.icon />} <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              ) : (
                <p>No menu items available</p>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
