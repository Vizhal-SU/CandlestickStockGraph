import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayout = ({isDarkTheme, toggleTheme}) => {
  return (
    <div>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Outlet />
    </ div>
  );
};
export default MainLayout;