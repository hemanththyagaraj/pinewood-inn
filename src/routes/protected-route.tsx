import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props: { children: ReactNode }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default ProtectedRoute;
