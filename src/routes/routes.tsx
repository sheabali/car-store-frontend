import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import AllProductsPage from '@/pages/Products/AllProducts/AllProducts';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import ProductDetails from '@/pages/Products/ProductDetails';
import CheckoutPage from '@/pages/CheckoutPage/CheckoutPage';
import OrderVerification from '@/pages/VerifyOrder/VerifyOrder';
import OrderDetails from '@/pages/Order/Order';
import Dashboard from '@/components/Layout/Dashboard';
import Orders from '@/pages/Dashboard/User/Orders';
import AccountSettings from '@/pages/Dashboard/AccountSettings';
import ProtectedRoute from '@/components/Layout/ProtectedRoute';

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
        path: '/productDetails/:Id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout/:Id',
        element: <CheckoutPage />,
      },
      {
        path: '/orders/verify',
        element: <OrderVerification />,
      },
      {
        path: '/orders',
        element: <OrderDetails />,
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
  {
    path: '/user',
    element: (
      <ProtectedRoute role="user">
        <Dashboard children={undefined} />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'order', // Use relative path here
        element: <Orders />,
      },
      {
        path: 'accountsettings', // Use relative path here
        element: <AccountSettings />,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute role="admin">
        <Dashboard children={undefined} />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'order', // Use relative path here
        element: <Orders />,
      },
      {
        path: 'accountsettings', // Use relative path here
        element: <AccountSettings />,
      },
    ],
  },
]);

export default routes;
