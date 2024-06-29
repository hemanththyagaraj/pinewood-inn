import Login from 'pages/login';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './protected-route';
import MainLayout from 'layouts';
import Dashboard from 'pages/dashboard';
import NotFound from 'pages/not-found';
import Cabins from 'pages/cabins';
import Bookings from 'pages/bookings';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="users" element={<Dashboard />} />
        <Route path="settings" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
