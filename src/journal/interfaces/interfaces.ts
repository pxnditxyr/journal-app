
export interface User {
    uid: string;
    name: string;
};

export interface SignUpForm {
    name: string;
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

export interface SignUpFormValidation {
    nameValidation: boolean;
    usernameValidation: boolean;
    emailValidation: boolean;
    passwordValidation: boolean;
    passwordConfirmValidation: boolean;
};

export interface UiState {
    loading: boolean;
    msgError: string;
};

export interface State {
    ui : { 
            loading : boolean,
            msgError : String
    };
    auth : { 
            uid : string,
            name : string
    };
    notes : NotesState;
};

export interface Note {
    id: string;
    title: string;
    content: string;
    imgUrl: string;
    createdAt: number;
}

export interface  NotesState {
    notes: Note[];
    activeNote: Note | null;
}
