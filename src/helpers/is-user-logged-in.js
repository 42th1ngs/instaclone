import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function IsUserLoggedIn({ user, loggedInPath, children }) {
    if (!user) {
        return children;
    }

    if (user) {
        return (
            <Navigate
                to={loggedInPath}
                replace={true}
            />
        );
    }
}

IsUserLoggedIn.propTypes = {
    user: PropTypes.object,
    loggedInPath: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};