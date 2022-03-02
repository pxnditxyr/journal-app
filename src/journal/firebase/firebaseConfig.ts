import { initializeApp  } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCR0BPPL8zaFBwxsahCQRzwcSPtY49ii94",
    authDomain: "journal-app-4ec3b.firebaseapp.com",
    projectId: "journal-app-4ec3b",
    storageBucket: "journal-app-4ec3b.appspot.com",
    messagingSenderId: "332173469069",
    appId: "1:332173469069:web:773196e4d9b81ea94289c4"
};

const app = initializeApp( firebaseConfig );
const db = getFirestore( app );
const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();


export {
    app,
    auth,
    db,
    googleAuthProvider,
};
