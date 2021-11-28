import { Link } from 'react-router-dom';

export const SignInPage = () => {
    return (
        <>
            <h3 className="auth__title"> Sign In </h3>
            <form className="auth__form">
                <input 
                    className="auth__input"
                    type="email" 
                    placeholder="Username or Email"
                    name="email"
                    autoComplete="off"
                />

                <input 
                    className="auth__input"
                    type="password" 
                    placeholder="Password"
                    name="password"
                />
                
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                > 
                    Sign In 
                </button>
                <div className="auth__social-networks">
                    <p> Sign in with social networks </p>
                    <div className="google-btn">
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
