import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AuthService from './AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedin, setLoggedin] = useState(false);
    const Auth = new AuthService();

    const handleFormSubmit = (event) => {
        event.preventDefault();
      
        Auth.login(username, password).then(res => {
            console.log(res);
            if(res && res.user.id){
                setLoggedin(true);
                window.location.reload();
            }else{
                alert("Inlogegevens zijn onjuist. Probeer het opnieuw");
            }
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const handleChange = (event) => {
        if(event.target.name === 'username'){
            setUsername(event.target.value);
        }else{
            setPassword(event.target.value);
        }
    }

    return (
        <React.Fragment>
            {/* <div className='login_overlay'></div> */}
            <div className='login'>
                <div className='login_logo'>
                    <img src="/images/icon.png" />
                </div>
                <img className="logo_text" src="/images/logo_text.png" />

                <form onSubmit={(event) => handleFormSubmit(event)}>
                    <div className="mb-3">
                        <span className='icon'>
                            <i className="fas fa-user"></i>
                        </span>
                        <input type="text" onChange={handleChange} className="form-control" name="username" id="username" placeholder="Gebruikersnaam" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <span className='icon'>
                            <i className="fas fa-key"></i>
                        </span>
                        <input type="password" onChange={handleChange} className="form-control" name="password" id="password" placeholder="Wachtwoord"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Inloggen</button>
                    <div id='err_msg'></div>
                </form>
            </div>
        </React.Fragment>
        
    );
}

export default Login;
