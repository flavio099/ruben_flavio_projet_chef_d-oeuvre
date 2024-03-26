import { NavLink } from "react-router-dom";
import './officiel.css'
function EventNavBar(){
    return(
        <>
         <nav className="navbar">
                <NavLink to='Concert'>Concert</NavLink>
                <NavLink to='Chill'>Chill</NavLink>
                <NavLink to='Séminaire'>Séminaire</NavLink>
                <NavLink to='Conférence'>Conférence</NavLink>
                <NavLink to='Soirée de gala'>Soirée de gala</NavLink>
                <NavLink to='Autres'>Autres</NavLink>
            </nav>
        </>
    )
}

export default EventNavBar

