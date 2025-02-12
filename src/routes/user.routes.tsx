import AccountSettings from '@/pages/Dashboard/AccountSettings';
import Orders from '@/pages/Dashboard/User/Orders';

const userPaths = [
  {
    name: 'Order',
    path: 'order',
    element: <Orders />,
    icon: 'Home',
  },
  {
    name: 'Settings',
    path: 'accountsettings',
    element: <AccountSettings />,
    icon: 'Settings',
  },
];

export default userPaths;
