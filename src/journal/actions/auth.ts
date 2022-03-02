import Swal from 'sweetalert2';
import { Dispatch } from 'redux';
import { googleAuthProvider, auth } from '../firebase/firebaseConfig';
import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { startLoadingAction, stopLoadingAction } from '../actions/ui';
import { errorMessagesFirebase } from '../helpers/errorMessages';

export const startLoginEmailPassword = ( email : string, password : string ) => {
    return ( dispatch : Dispatch ) => {
        dispatch( startLoadingAction() );
        signInWithEmailAndPassword( auth, email, password )
            .then( ({ user }) => {
                dispatch( signIn( user.uid, user.displayName || "" ) )
                dispatch( stopLoadingAction() );
            }).catch( ( error ) => {
                dispatch( stopLoadingAction() );
                Swal.fire({ 
                    title: 'Error',
                    text: errorMessagesFirebase( error.code ),
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });
    };
};

export const startRegisterWithEmailPassword = ( name : string, username : string, email : string, password : string ) => {
    return ( dispatch : Dispatch ) => {
        createUserWithEmailAndPassword( auth, email, password )
            .then( async({ user }) => {
                await updateProfile( user, { displayName: name } );
                dispatch( signIn( user.uid, user.displayName || "" ) );
            }).catch( ( error ) => {
                Swal.fire({ 
                    title: 'Error',
                    text: errorMessagesFirebase( error.code ),
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });
    }
}

export const startGoogleSignIn = () => {
    return ( dispatch : Dispatch ) => {
        signInWithPopup( auth, googleAuthProvider )
            .then( ({ user }) => {
                dispatch( signIn( user.uid, user.displayName || "" ) )
            }
        ).catch((error) => {
            const credential = GoogleAuthProvider.credentialFromError( error );
            Swal.fire({ 
                title: 'Error',
                text: errorMessagesFirebase( error.code ),
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
    };
};

export const signIn = ( uid : string, name : string ) => ({
    type: "LOGIN",
    payload: {
        uid,
        name
    }
});


export const startSignOut = () => {
    return async( dispatch : Dispatch ) =>{
        await signOut( auth );
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: "LOGOUT"
});
