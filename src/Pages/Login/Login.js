import React, { useState } from 'react';
import './Login.css';

function Login() {
    
   const[name, setName] = useState("");
   const[email, setEmail] = useState("");
   const[password, setPassword] = useState("");

    return (
        <div className="login-page">
            <form className="login-form">
                <h1>Login here</h1>
                <label for="name">Name</label>
                <input
                    placeholder="Enter Your Name"
                    name="name" type="text"
                    value={name}
                    onChange={ (e) => setName(e.target.value)}
                >
                </input>
                <label for="email">Email</label>
                <input
                    placeholder="Enter Your Email"
                    name="email" type="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <label for="password">Password</label>
                <input
                    placeholder="password"
                    name="password" type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
