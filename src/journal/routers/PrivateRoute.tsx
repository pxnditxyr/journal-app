import { Navigate } from 'react-router-dom';

interface Props {
    children: JSX.Element | JSX.Element[];
    isLoggedIn: boolean;
}

export const PrivateRoute = ( { children, isLoggedIn } : Props ) => {
    return isLoggedIn 
        ? <> { children } </>
        : <Navigate to="/auth/signin/" />;
};
