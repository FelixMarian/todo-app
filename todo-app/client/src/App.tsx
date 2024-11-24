// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// @ts-ignore
import Home from './pages/Home.jsx';
// @ts-ignore
import List from './pages/List.jsx';
// @ts-ignore
import Login from './pages/Login.jsx';
// @ts-ignore
import Register from './pages/Register.jsx';
import "./App.css";




function App(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;