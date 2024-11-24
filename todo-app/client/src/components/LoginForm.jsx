import "../styles/Login.css";
import { useState } from "react";

function LoginForm() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user, password: pass }),
        });

        const data = await response.json();
        if (data.token) {
            // Save token locally
            localStorage.setItem("token", data.token);
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-wrap">
                <h2>Login</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={(e) => setUser(e.target.value)}
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