import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home/Home';
import AllProductsPage from '@/pages/Products/AllProducts/AllProducts';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/allproduct',
        element: <AllProductsPage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
