import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">

            <a href="#" className="logo"><span>Lushi-</span>Events</a>
            <nav className="navbar">
                <NavLink to='/'>Acceuil</NavLink>
                <NavLink to='Services'>Services</NavLink>
                <NavLink to='Gallerie'>Gallerie</NavLink>
                <NavLink to='Evénéments'>Evénéments</NavLink>
                <NavLink to='ServiceClient'>Service client</NavLink>
                <NavLink to='Àpropos'>À propos</NavLink>
                <NavLink to="Inscription">Inscription</NavLink>
                <NavLink to="Connexion">Connexion</NavLink>
            </nav>
            <div id="menu-bars" className="fas fa-bars"></div>

        </header>
    );
}

export default Header;

