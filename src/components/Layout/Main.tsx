import Footer from '@/pages/Home/Footer/Footer';
import Navbar from '@/pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
