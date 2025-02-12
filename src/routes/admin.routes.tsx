import AccountSettings from '@/pages/Dashboard/AccountSettings';
import UserManagement from '@/pages/Dashboard/Admin/userManagement';

const adminPaths = [
  {
    name: 'User',
    path: 'user',
    element: <UserManagement />,
    icon: 'User',
  },
  {
    name: 'Settings',
    path: 'accountsettings',
    element: <AccountSettings />,
    icon: 'Settings',
  },
];

export default adminPaths;
