import {useState} from 'react'
import "../styles/MyProfile.css"
import Button from "../components/Button.jsx"

function MyProfile() {
    const[data, setData] = useState("????");

    return (
        <>
            <div className="ProfileContainer">
                <div className="ProfileWrap">
                    <div className="Pfp">
                        <img src='../../../client/public/pfp.jpg' alt="Error" style={{width: '15rem', height: '10rem', border: '1px solid black'}}/>
                    </div>
                    <div className="Info">
                        <div className="Box">
                            Username: {data}
                        </div>
                        <div className="Box">
                            E-mail: {data}
                        </div>
                        <div className="Box">
                            Creation date: {data}
                        </div>
                        <div className="Box">
                            Current tasks: {data}
                        </div>
                    </div>
                    <div className="Buttons">
                    <Button title="Settings"></Button>
                    <Button title="Logout"></Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyProfile;