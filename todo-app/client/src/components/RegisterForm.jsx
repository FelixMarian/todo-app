import '../styles/Register.css'
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function RegisterForm(){
    const [user, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post("https://localhost:7202/api/Account/register", {
                username: user,
                email: email,
                password: password
            }, {headers: {
                    "Content-Type": "application/json",
                }})
            console.log(response);
            if(response.status === 200)
                navigate('/login');
        } catch (e) {
            console.log(e);
        }
    }
    return (


        <>
            <div className="register-container">
                <div className="register-wrap">
                    <h2>Register</h2>

                    <div className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        <input type="email" placeholder="E-mail" name="mail" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        <button onClick={handleSubmit}> Sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterForm;

