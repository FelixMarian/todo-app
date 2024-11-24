import '../styles/Register.css'
import {useState} from 'react';
function RegisterForm(){
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        const response = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user: user, email: email, password: pass }),
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
        }
    }
    return (


        <>
            <div className="register-container">
                <div className="register-wrap">
                    <h2>Register</h2>

                    <form className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="email" placeholder="E-mail" name="mail" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button > Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;

