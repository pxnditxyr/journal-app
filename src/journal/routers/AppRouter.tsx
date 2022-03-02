import { useEffect, useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import { Main } from '../components/main/Main';
import { AuthRouter } from './AuthRouter';
import { auth } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { signIn } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [ checking, setChecking ] = useState( true );
    const [ isLoggedIn, setLoggedIn ] = useState( false );
    
    useEffect( () => {
        auth.onAuthStateChanged( ( user ) => {
            if ( user?.uid ) {
                dispatch( signIn( user.uid, user.displayName || "" ) )
                setLoggedIn( true );
            } else {
                setLoggedIn( false );
            }
            setChecking( false );
        });
            
    }, [ dispatch ] );

    if ( checking ) {
        return <div>Checking...</div>
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ 
                        <PrivateRoute isLoggedIn={ isLoggedIn }>
                            <Main />
                        </PrivateRoute>
                        }
                    />
                    <Route path="auth/*" element={
                        <PublicRoute isLoggedIn={ isLoggedIn }>
                            <AuthRouter />
                        </PublicRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    );
};

