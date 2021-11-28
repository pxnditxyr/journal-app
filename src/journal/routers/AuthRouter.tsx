import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

import { SignInPage, SignUpPage } from '../components/auth/';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route path="signin" element={ <SignInPage /> } />
                    <Route path="signup" element={ <SignUpPage /> } />
                    <Route path="*" element={ <Navigate to="signin" /> } />
                </Routes>
            </div>
        </div>
    );
};
