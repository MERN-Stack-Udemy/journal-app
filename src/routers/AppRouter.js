import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch();
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            if(user?.uid){
                dispatch( login( user.uid, user.displayName ));
                setIsLoggedIn(true);
            }else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })
    }, [ dispatch, setChecking, setIsLoggedIn ]);

    if(checking){
        return (
            <h1> Loading.... </h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoutes 
                        exact path="/" 
                        component={ JournalScreen } 
                        isAuthenticated={ isLoggedIn }
                    />
                    <PublicRoute 
                        path="/auth/login" 
                        component={ AuthRouter } 
                        isAuthenticated={ isLoggedIn }
                    />
                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
