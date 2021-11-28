import { Link } from 'react-router-dom';

export const SignUpPage = () => {
    return (
        <>
            <h3 className="auth__title"> Sign Up </h3>
            <form className="auth__form">

                <input 
                    className="auth__input"
                    type="text" 
                    placeholder="Complete Name"
                    name="text"
                    autoComplete="off"
                />

                <input 
                    className="auth__input"
                    type="text" 
                    placeholder="Username"
                    name="text"
                    autoComplete="off"
                />

                <input 
                    className="auth__input"
                    type="text" 
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                />

                <input 
                    className="auth__input"
                    type="password" 
                    placeholder="Password"
                    name="password"
                />

                <input 
                    className="auth__input"
                    type="password" 
                    placeholder="Confirm Password"
                    name="password2"
                />

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
