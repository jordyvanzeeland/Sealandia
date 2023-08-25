import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import AuthService from './AuthService';
import { NavLink } from 'react-router-dom';
import withRouter from './withRouter';
const Auth = new AuthService

const Sidebar = () => {

    const [modules,setModules] = useState([]);

    const logout = () => {
        Auth.logout();
        window.location.reload();
    }

    useEffect(() => {
        fetch("http://localhost:8000/api/modules", { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'bearer' + localStorage.getItem('token'), 
                'Accept': 'application/json',
            })
        })
        .then(response => response.json())
        .then(data => {
            setModules(data);
        })
    }, [])

    return (
        <React.Fragment>
            <div className='sidebar'>
                <img src="/images/logo-white.png" className='logo' />

                <h3>Modules</h3>
                <ul>
                    {modules.map((module, i) => {
                        return (
                            <NavLink to={`/module/${module.id}`} exact="true" key={module.id} reloadDocument="true">
                                <li key={i}><i className="fa fa-circle" style={{ fontSize: '10px', color: module.color }}></i> {module.modulename}</li>
                            </NavLink>

                        )
                    })}
                </ul>

                <ul className='bottom-menu'>
                    <li><i className="fa fa-cogs"></i> Beheer</li>
                    <li onClick={() => logout()}><i className="fa fa-sign-out"></i> Uitloggen</li>
                </ul>
            </div>
        </React.Fragment>
        
    );
}

export default withRouter(Sidebar);
