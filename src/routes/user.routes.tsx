import AccountSettings from '@/pages/Dashboard/AccountSettings';
import Orders from '@/pages/Dashboard/User/Orders';
import Overview from '@/pages/Dashboard/User/Overview';

const userPaths = [
  {
    name: 'Overview',
    path: 'overview',
    element: <Overview />,
    icon: 'Outdent',
  },
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
