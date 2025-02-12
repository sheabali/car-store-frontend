import AddCar from '@/pages/Dashboard/Admin/AddCar';
import UserManagement from '@/pages/Dashboard/Admin/userManagement';

const adminPaths = [
  {
    name: 'User',
    path: 'user',
    element: <UserManagement />,
    icon: 'User',
  },
  {
    name: 'Add Car',
    path: 'addcar',
    element: <AddCar />,
    icon: 'CirclePlus',
  },
];

export default adminPaths;
