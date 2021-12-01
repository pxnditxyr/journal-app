import { Dispatch } from 'redux';
import { googleAuthProvider, auth } from '../firebase/firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const startLoginEmailPassword = ( email : string, password : string ) => {
    return ( dispatch : Dispatch ) => {
        setTimeout( () => {
            dispatch( signIn( email, password ) )
        }, 3500 );
    };
};

export const startGoogleSignIn = () => {
    return ( dispatch : Dispatch ) => {
        signInWithPopup( auth, googleAuthProvider )
            .then( ({ user }) => {
                dispatch( signIn( user.uid, user.displayName || "" ) )
            }
        ).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ errorCode, errorMessage, email, credential })
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
