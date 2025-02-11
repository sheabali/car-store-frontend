import { Home, Settings, LucideIcon } from 'lucide-react';
import { TSidebarItem, TUserPaths } from '../types';

const iconsMap: Record<string, LucideIcon> = {
  Home,
  Settings,
};

export const sidebarItemsGenerator = (
  items: TUserPaths[],
  role: string
): TSidebarItem[] => {
  return items.map((item) => ({
    title: item.name ?? 'Untitled',
    url: `/${role}/${item.path || ''}`,
    icon: iconsMap[item.icon] ?? Home,
  }));
};
