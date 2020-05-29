import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

interface IRouteProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const RouteWrapper: React.FC<IRouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();

  const signed = !!user;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/top-artists" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props: RouteProps) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
