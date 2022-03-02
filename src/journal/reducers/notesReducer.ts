import { Note, NotesState } from '../interfaces/interfaces';

const INITIAL_STATE : NotesState = {
    notes: [],
    activeNote: null
}

type notesAction =
    | { type: "ADD_NOTE"; payload: Note };


export const notesReducer = ( state : NotesState = INITIAL_STATE , action : notesAction ) => {
    switch ( action.type ) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [ ...state.notes , action.payload ]
            }
        default:
            return state;
    }

}
