import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import { useAuth } from '../context/AuthContext';

const MainLayout = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default MainLayout;
