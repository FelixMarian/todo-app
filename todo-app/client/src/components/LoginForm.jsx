import "../styles/Login.css";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useCookies} from "react-cookie";
import {jwtDecode} from "jwt-decode";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [cookie, setCookie, removeCookie] = useCookies(["email"]);

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:7202/api/Account/login", {
                email: email,
                password: pass,
                withCredentials: true
            },
                {headers: {
                    "Content-Type": "application/json",
                    }});
            if(response.data.token) {
                localStorage.setItem("token", response.data.token);
                var decoded = jwtDecode(response.data.token);
                console.log(decoded["guid"]);
                navigate('/');
            }
        }
        catch (e) {
            console.log(e);
        }


    };

    return (
        <div className="login-container">
            <div className="login-wrap">
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <button type="submit">Sign in</button>
                    <a href="/register">
                        <p>Don't have an account? Register</p>
                    </a>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;