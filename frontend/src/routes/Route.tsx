import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { parseISO, isAfter } from 'date-fns';

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
  const { user, exp, signOut } = useAuth();

  let signed = !!user;

  if (exp) {
    if (isAfter(new Date(), parseISO(exp.toString()))) {
      signed = false;
      signOut();
    }
  }

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
