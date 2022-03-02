import { Navigate } from 'react-router';

interface Props {
    children: JSX.Element | JSX.Element[];
    isLoggedIn: boolean;
}
export const PublicRoute = ( { children, isLoggedIn }: Props ) => {
    return isLoggedIn
        ? <Navigate to="/" />
        : <> { children } </>;
};
