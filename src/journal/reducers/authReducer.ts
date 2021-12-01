import { User } from '../interfaces/interfaces';

type authAction =
    | { type: "login", payload: { user : User } }
    | { type: "logout", payload: {} };

export const authReducer = ( state : User | {} = {}, action : authAction ) : User | {} => {

    switch ( action.type ) {

        case "login":
            return {
                uid: action.payload.user.uid,
                name: action.payload.user.name,
            };

        case "logout":
            return {};

        default:
            return state;
    }

};
