import {useEffect, useState} from 'react'
import "../styles/MyProfile.css"
import Button from "../components/Button.jsx"
import axios from 'axios'

function MyProfile() {
    const[data, setData] = useState("????");
    const [mail, setMail] = useState("");
    const [cDate, setCDate] = useState("");
    const [username, setUsername] = useState("");

    const getInfo = async () => {
        try {
            const response = await axios.get("https://localhost:7202/api/Account/users/me",
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    }
                });
            setMail(response.data.mail);
            setCDate(response.data.createdAt);
            setUsername(response.data.username);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <div className="ProfileContainer">
                <div className="ProfileWrap">
                    <div className="Pfp">
                        <img src='../../../client/public/pfp.jpg' alt="Error" style={{width: '15rem', height: '10rem', border: '1px solid black'}}/>
                    </div>
                    <div className="Info">
                        <div className="Box">
                            Username: {username}
                        </div>
                        <div className="Box">
                            E-mail: {mail}
                        </div>
                        <div className="Box">
                            Creation date: {cDate}
                        </div>
                    </div>
                    <div className="Buttons">
                    <Button title="Logout"></Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;