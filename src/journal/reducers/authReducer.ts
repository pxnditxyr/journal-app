import { User } from '../interfaces/interfaces';

type authAction =
    | { type: "LOGIN", payload: User }
    | { type: "LOGOUT", payload: {} };

export const authReducer = ( state : User | {} = {}, action : authAction ) : User | {} => {

    switch ( action.type ) {

        case "LOGIN":
            return {
                uid: action.payload.uid,
                name: action.payload.name,
            };

        case "LOGOUT":
            return {};

        default:
            return state;
    }

};
