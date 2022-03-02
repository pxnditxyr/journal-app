import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailPassword } from '../../actions/auth';

import { 
    isValidName, 
    isValidUsername,
    isValidEmail,
    isValidPassword,
    isSamePassword,
} from '../../helpers/formValidation';

export const SignUpPage = () => {

    const dispatch = useDispatch();
    const [ isSubmitting, setIsSubmitting ] = useState( false );
    const { name, username, email, password, passwordConfirm, handleInputChange } = useForm({
        name: "pxnditx",
        username: "pxndxs",
        email: "ehhh@gmail.com",
        password: "Madara987*!",
        passwordConfirm: "Madara987*!",
    });

    const [ validations, setValidations ] = useState({
        name: false,
        username: false,
        email: false,
        password: false,
        passwordConfirm: false
    });

    const handleSignUp = ( event : React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        setIsSubmitting( true );

        const validatedName = isValidName( name.trim() );
        const validatedUsername = isValidUsername( username.trim() );
        const validatedEmail = isValidEmail( email.trim() );
        const validatedPassword = isValidPassword( password.trim() );
        const validatedPasswordConfirm = isSamePassword( password.trim(), passwordConfirm.trim() );

        setValidations({
            name: validatedName,
            username: validatedUsername,
            email: validatedEmail,
            password: validatedPassword,
            passwordConfirm: validatedPasswordConfirm
        });

        if ( validatedName && validatedUsername && validatedEmail && validatedPassword && validatedPasswordConfirm )
            dispatch( startRegisterWithEmailPassword( name, username, email, password ) )
    };

    return (
        <>
            <h3 className="auth__title"> Sign Up </h3>
            <form 
                className="auth__form"
                onSubmit={ handleSignUp }
            >
                <input 
                    className="auth__input"
                    type="text" 
                    placeholder="Complete Name"
                    name="name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                {
                    isSubmitting && !validations.name &&
                    <span className="auth__alert-error">
                        Must be at least 4 characters long
                    </span>
                }

                <input 
                    className="auth__input"
                    type="text" 
                    placeholder="Username"
                    name="username"
                    autoComplete="off"
                    value={ username }
                    onChange={ handleInputChange }
                />

                {
                    isSubmitting && !validations.username &&
                    <span className="auth__alert-error">
                        Must be at least 4 characters long
                    </span>
                }

                <input 
                    className="auth__input"
                    type="text" 
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                {
                    isSubmitting && !validations.email &&
                    <span className="auth__alert-error">
                        Must be a valid email
                    </span>
                }

                <input 
                    className="auth__input"
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                {
                    isSubmitting && !validations.password &&
                    <span className="auth__alert-error">
                        <ul>
                            <li>Must be at least 8 characters long</li>
                            <li>Must contain at least one number</li>
                            <li>Must contain at least one uppercase letter</li>
                            <li>Must contain at least one lowercase letter</li>
                            <li>Must contain at least one symbol</li>
                        </ul>
                    </span>
                }

                <input 
                    className="auth__input"
                    type="password" 
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    value={ passwordConfirm }
                    onChange={ handleInputChange }
                />

                {
                    isSubmitting && !validations.passwordConfirm &&
                    <span className="auth__alert-error">
                        The password is not the same
                    </span>
                }

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                > 
                    Sign Up 
                </button>

                <Link to="/auth/signin" className="link">
                    Already have an account?
                </Link>
            </form>
        </>
    );
};
