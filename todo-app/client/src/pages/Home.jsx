import HeaderNav from "../components/HeaderNav.jsx";
import Card from '../components/Card.jsx';
import '../styles/Home.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

function Home() {
    const [nextDl, setNextDl] = useState('');
    const [overdues, setOverdues] = useState([]);
    const [next, setNext] = useState([]);

    const reqNextDl = async () => {
        try {
            const response = await axios.get("https://localhost:7202/api/Tasks/nextDl",
                 {headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    }});
            setNextDl(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const overDues = async () => {
        try {
            const response = await axios.get("https://localhost:7202/api/Tasks/overdue",
                {headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    }});
            setOverdues(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const getNextDl = async () => {
        try {
            const response = await axios.get("https://localhost:7202/api/Tasks/getFiveDl",
                {headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    }});
            setNext(response.data);
        } catch (e) {
            console.log(e);
        }
    }
    
    useEffect(()=>{
        reqNextDl();
        overDues();
        getNextDl();
    }, []);

    return (
      <>
        <HeaderNav/>

        <div className="Cards">
            <Card title={"Next deadline"} text={nextDl}/>
            <Card title={"Overdue deadlines"} text={overdues}/>
            <Card title={"Top 5 next deadlines"} text={next}/>
        </div>
      </>
    );
}

export default Home;