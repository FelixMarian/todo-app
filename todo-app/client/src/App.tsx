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
// @ts-ignore
import MyAccount from './pages/MyAccount.jsx';
import "./App.css";
// @ts-ignore
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";



function App(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route element={<ProtectedRoutes/>}>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/account" element={<MyAccount/>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;