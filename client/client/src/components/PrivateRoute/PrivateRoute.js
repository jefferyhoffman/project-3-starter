import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ authToken }) => (
      <Route
        {...rest}
        render={props =>
          authToken ? (
            <Component {...props} />
          ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    )}
  </AuthContext.Consumer>
);

export default PrivateRoute;
