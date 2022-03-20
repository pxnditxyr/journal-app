import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';
import { Note, State } from '../interfaces/interfaces';
import { db } from '../firebase/firebaseConfig';
import { loadNotes } from '../helpers/loadNotes';
import { fileUpload } from '../helpers/fileUpload';
import Swal from 'sweetalert2';

type Dispatcher = ThunkDispatch<State, undefined, AnyAction>;


export const createNewNote = () => {
    return async( dispatch : Dispatch, getState : () => State ) => {
        const { uid } = getState().auth;
        
        const newNote = {
            id: '',
            title: '',
            content: '',
            imgUrl: '',
            createdAt: new Date().getTime()
        };
        const docRef = await addDoc( collection( db, `${ uid }/journal/notes` ), newNote );
        dispatch( setActiveNote( docRef.id, newNote  ) )
        dispatch( addNewNote( docRef.id, newNote ) );
    }
};

export const setActiveNote = ( id : string, note : Note ) => ({
    type: 'SET_ACTIVE_NOTE',
    payload: {
        ...note,
        id
    }
});

export const addNewNote = ( id : string, note : Note ) => ({
    type: "ADD_NEW_NOTE",
    payload: { 
        ...note,
        id,
    }
});

export const setNotes = ( notes : Note[] ) => ({
    type: 'SET_NOTES',
    payload: notes
});

export const startLoadingNotes = ( uid : string ) => {
    return async( dispatch : Dispatch ) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
};

export const startSaveNote = ( note : Note ) => {
    return async( dispatch : Dispatch, getState : () => State ) => {
        const { uid } = getState().auth;
        const noteToSave = { ...note, id: "" };
        const noteToFirestore = doc( db, `${ uid }/journal/notes/${ note.id }` );

        try {
            await updateDoc( noteToFirestore, noteToSave );
            dispatch( refreshNote( note.id, note ) );
            
            Swal.fire({
                title: note.title,
                text: 'Your note has been saved!',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        } catch ( error ) {
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }

    };
};

export const refreshNote = ( id : string, note : Note ) => ({
    type: 'REFRESH_NOTE',
    payload: {
        id,
        note
    }
});

export const startUploading = ( file : File ) => {
    return async( dispatch : Dispatcher, getState : () => State ) => {
        const { activeNote } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload( file );
        if ( activeNote ) {
            activeNote.imgUrl = fileUrl;
            dispatch( startSaveNote( activeNote ) );
        }
        Swal.close();
    };
};


export const startDeletingNote = ( id : string ) => {
    return async( dispatch : Dispatch, getState : () => State ) => {
        const { uid } = getState().auth;
        try {
            await deleteDoc( doc( db, `${ uid }/journal/notes/${ id }` ) );
            Swal.fire({
                title: 'Deleted!',
                text: 'Your note has been deleted!',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
        } catch ( error ) {
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }
        dispatch( removeNote( id ) );
    }
};

export const removeNote = ( id : string ) => ({
    type: 'DELETE_NOTE',
    payload: id
});

export const notesLogout = () => ({
    type: "LOGOUT_CLEANING",
});
