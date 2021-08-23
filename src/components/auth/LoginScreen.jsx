import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';

import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeErrorAction, setErrorAction } from '../../actions/ui';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)

    const [ formValues, handleInpuChange] = useForm({
        email : 'smog@gmail.com',
        password : '123456'
    });
    const { email, password } = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();
        if(isFormValid){
            dispatch( startLoginEmailPassword(email, password) );
        }
    }

    const isFormValid = () => {
        if (!validator.isEmail(email)){
            dispatch( setErrorAction('email is not valid'));
            return false;
        }else if ( password.length < 5){
            dispatch( setErrorAction('incorrect password 6 characters min'));
            return false;
        }
        dispatch( removeErrorAction() );
        return true;
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h3 className="auth__title" >Login</h3>
            <form onSubmit={ handleLogin }>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange= { handleInpuChange }
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange= { handleInpuChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>
                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    className="link"
                    to="/auth/register/"
                >
                    Create new account
                </Link>
                
            </form>
        </>
    )
}
