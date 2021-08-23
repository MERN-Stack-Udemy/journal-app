import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { removeErrorAction, setErrorAction } from '../../actions/ui'
import { startRegisterWithEmailPassword } from '../../actions/auth'

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();
    const { msgError,loading } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: 'smog',
        email: 'smog@email.com',
        password: '123456',
        password2: '123456'
    })
    const {name, email, password, password2}= formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if( isFormValid() ){
            dispatch( startRegisterWithEmailPassword( email, password, name ) );
        }
    };

    const isFormValid = () => {
        if(name.trim().length === 0 ){
            dispatch( setErrorAction('name is required'));
            return false;
        }else if (!validator.isEmail(email)){
            dispatch( setErrorAction('email is not valid'));
            return false;
        }else if ( password !== password2 || password.length < 5){
            dispatch( setErrorAction('incorrect password and should, 6 characters min'));
        }
        dispatch( removeErrorAction() );
        return true;
    }

    return (
        <>
            <h3 className="auth__title" >Register</h3>
            <form onSubmit={ handleRegister }>
                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                />
                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={ handleInputChange }
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                    disabled={loading}
                >
                    Register
                </button>

                <Link
                    className="link"
                    to="/auth/login/"
                >
                    Already register?
                </Link>
                
            </form>
        </>
    )
}
