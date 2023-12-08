import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
function Login() {
	const [email, setEamil] = useState("");
    const [password, setPassword] = useState("");
    // signing in function
    const signIn = (e) => {
        e.preventDefault()
    }
    const register = (e) => {
        e.preventDefault();
    }
	return (
        <div className="login">
            <Link to={'/'}>
                <img
				className="login__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
				alt="Amazon logo"
			/>
            </Link>
			
			<div className="login__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEamil(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						name=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="login__signInButton"
						onClick={signIn}
					>
						Sign In
					</button>
				</form>
				<p>
					By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use
					Sale. Please see our Privacy Notice and our Interest-Based Ads Notice
				</p>

				<button onClick={register} className="login__registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
