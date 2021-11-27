import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Main } from '../components/main/Main';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Main /> } />
                    <Route path="auth/*" element={ <AuthRouter /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
};

