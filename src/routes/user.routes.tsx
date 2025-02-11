import AccountSettings from '@/pages/Dashboard/AccountSettings';
import Orders from '@/pages/Dashboard/User/Orders';

const userPaths = [
  {
    name: 'Order',
    path: 'order', // ✅ Ensure path is present
    element: <Orders />,
    icon: 'Home', // ✅ Add icon name as a string
  },
  {
    name: 'Settings',
    path: 'accountsettings',
    element: <AccountSettings />,
    icon: 'Settings',
  },
];

export default userPaths;
