import { Note, NotesState } from '../interfaces/interfaces';

const INITIAL_STATE : NotesState = {
    notes: [],
    activeNote: null
}

type notesAction =
    | { type: "SET_NOTES"; payload: Note[] }
    | { type: "SET_ACTIVE_NOTE"; payload: { note : Note } }
    | { type: "REFRESH_NOTE"; payload: { id : string, note : Note } }
    | { type: "DELETE_NOTE"; payload: string  }
    | { type: "LOGOUT_CLEANING", payload: {} }
    | { type: "ADD_NEW_NOTE", payload: Note  }
    


export const notesReducer = ( state : NotesState = INITIAL_STATE , action : notesAction ) => {
    switch ( action.type ) {

        case "SET_ACTIVE_NOTE":
            return {
                ...state,
                activeNote: {
                    ...action.payload
                } 
            };
        case "SET_NOTES":
            return {
                ...state,
                notes: [
                    ...action.payload
                ]
            };

        case "REFRESH_NOTE":
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id 
                        ? action.payload.note 
                        : note
                )
            };
        case "DELETE_NOTE":
            console.log( action.payload );
            return {
                ...state,
                activeNote: null,
                notes: state.notes.filter(
                    note => note.id !== action.payload
                )
            }
        case "LOGOUT_CLEANING":
            return {
                ...state,
                notes: [],
                activeNote: null
            }

        case "ADD_NEW_NOTE":
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes,
                ]
            }
        default:
            return state;
    }

}
