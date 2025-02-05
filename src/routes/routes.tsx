import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home/Home';
import AllProductsPage from '@/pages/Products/AllProducts/AllProducts';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import ProductDetails from '@/pages/Products/ProductDetails';
import CheckoutPage from '@/pages/CheckoutPage/CheckoutPage';
import OrderVerification from '@/pages/VerifyOrder/VerifyOrder';

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
