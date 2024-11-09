import '../styles/HeaderNav.css';


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
                <li className="nav-item">
                    <a className="nav-link" href="/account">My profile</a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderNav;