import AddCar from '@/pages/Dashboard/Admin/AddCar';
import Car from '@/pages/Dashboard/Admin/Car';
import UserManagement from '@/pages/Dashboard/Admin/UserManagement';

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
  {
    name: 'Car',
    path: 'car',
    element: <Car />,
    icon: 'Car',
  },
];

export default adminPaths;
