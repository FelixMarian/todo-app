import '../styles/HeaderNav.css';
import DromdownBtn from './Dropdown.jsx';

function HeaderNav() {
    return (
        <div className="HeaderNav">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/list">Todo</a>
                </li>
                <DromdownBtn/>
            </ul>
        </div>
    )
}

export default HeaderNav;