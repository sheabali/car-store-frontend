import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/main',
    element: <App />,
  },
]);

export default routes;
