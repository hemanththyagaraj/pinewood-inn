import Sidebar from 'components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
