import React, { Component, useState, useEffect } from 'react';
import AuthService from './AuthService';
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://localhost:8000');
    
    const AuthWrapped = (props) => {
        const [user, setUser] = useState([]);
        const Auth = new AuthService('http://localhost:8000');
        const navigate = useNavigate();
        let params = useParams

        useEffect(() => {
            if(Auth.loggedIn()){
                try {
                    const profile = Auth.getProfile()
                    setUser(profile);
                }
                catch (err) {
                    Auth.logout()
                    navigate('/login')
                }
            }
        }, [])

        return user ? <AuthComponent history={props.history} params={params} user={user} /> : null;
    }
    return AuthWrapped;
}
