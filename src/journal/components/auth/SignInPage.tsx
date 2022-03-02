import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleSignIn } from '../../actions/auth';
import { State } from '../../interfaces/interfaces';

 

export const SignInPage = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( ( state : State ) => state.ui );

    const { userName, password, handleInputChange } = useForm({
        userName: "ehhh@gmail.com",
        password: "Madara987*!"
    });

    const handleSignIn = ( event : React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        dispatch( startLoginEmailPassword( userName, password ) );
    };

    const handleGoogleSignIn = () => {
        dispatch( startGoogleSignIn() );
    };

    return (
        <>
            <h3 className="auth__title"> Sign In </h3>
            <form className="auth__form" onSubmit={ handleSignIn }>
                <input 
                    className="auth__input"
                    type="email" 
                    placeholder="Username or Email"
                    name="userName"
                    autoComplete="off"
                    value={ userName }
                    onChange={ handleInputChange }
                />

                <input 
                    className="auth__input"
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />
                
                <button
                    className="btn btn-primary btn-block disable"
                    type="submit"
                    disabled={ loading }
                > 
                    Sign In 
                </button>
                <div className="auth__social-networks">
                    <p> Sign in with social networks </p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleSignIn }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google-icon"/>
                        </div>
                        <p className="btn-text">
                            <b> Sign in with Google </b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/signup" className="link">
                    Don't have an account? Sign Up
                </Link>
            </form>
        </>
    );
};
