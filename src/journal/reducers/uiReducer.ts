import { UiState } from '../interfaces/interfaces';

const INITIAL_STATE = {
    loading: false,
    msgError: "",
}

type UiAction =
    | { type: "SET_ERROR", payload : string }
    | { type: "REMOVE_ERROR", payload : {} }
    | { type: "START_LOADING", payload : {} }
    | { type: "STOP_LOADING", payload : {} }

export const uiReducer = ( state : UiState = INITIAL_STATE, action : UiAction ) => {

    switch ( action.type ) {
        case "SET_ERROR":
            return {
                ...state,
                msgError: action.payload,
            }
        case "REMOVE_ERROR":
            return {
                ...state,
                msgError: "",
            }
        case "START_LOADING":
            return {
                ...state,
                loading: true,
            }
        case "STOP_LOADING":
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    }
};

