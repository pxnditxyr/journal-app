import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite';

import { db } from '../firebase/firebaseConfig';
import { Note } from '../interfaces/interfaces';

export const loadNotes = async( uid : string ) => {
    const notesSnap = await getDocs( 
        query( collection( db, `${ uid }/journal/notes` ), orderBy( "createdAt", "desc" ) )
    );
    const notes : Note[] = [];
    notesSnap.forEach( snapChildren => {
        const note : Note = snapChildren.data() as Note;
        note.id = snapChildren.id;
        notes.push( note );
    });
    return notes;
};
