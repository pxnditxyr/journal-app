
export const isValidEmail = ( email : string ) : boolean => {
    let regex = new RegExp( "[a-z0-9]+@[a-z]+[a-z]{2,3}" );
    return regex.test( email );
}

export const isValidPassword = ( password : string ) : boolean => {
    const regex = new RegExp( "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))" );
    return regex.test( password );
}

export const isSamePassword = ( password : string, passwordConfirm : string ) : boolean => password === passwordConfirm;

export const isValidName = ( name : string ) : boolean => {
    let regex = new RegExp( "^[a-zA-Z]+" );
    return regex.test( name ) && ( name.length > 4 );
}

export const isValidUsername = ( username : string ) : boolean => {
    let regex = new RegExp( "^[A-Za-z][A-Za-z0-9_]{4,29}$" );
    return regex.test( username );
}

export const formValidation = {
    isValidName,
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isSamePassword,
}
