import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {auth} from './firebase'
import "./Login.css"



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault();   
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (event) => {
        event.preventDefault(); 

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        
    }
  
    return (        
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src='https://th.bing.com/th/id/OIP.dU7voyou7U7ujxf3AsNAwgHaDH?pid=ImgDet&rs=1' />
                </Link>

                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}></input>

                        <h5>Password</h5>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>

                        <button onClick={signIn} className="login__signInButton" type="submit">Sign In</button>
                    </form>

                    <p> By signing-in you agree to Amazon's Conditions of Use & Sale.
                        Please see our privacy notice, our Cookies Notice and our Internet-Based-Ads Notice.
                    </p>
                    <button className="login__registerButton" onClick={register}>Create your Amazon account </button>
                </div> 
            </div>
    )
}

export default Login
