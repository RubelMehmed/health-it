import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Route, useNavigate } from 'react-router-dom';


const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) => user.email ? children : <useNavigate
                    to={{
                        pathname: "/login",
                        state: {from: location}
                }}
                ></useNavigate>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;