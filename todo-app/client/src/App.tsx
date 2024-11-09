// @ts-ignore
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// @ts-ignore
import Home from './pages/Home.jsx';
// @ts-ignore
import List from './pages/List.jsx';
import "./App.css";

function App(){
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;