import {NavLink} from 'react-router-dom';

import './NavBar.css';

function Navbar() {

    return (
        <div className='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Create">   Create</NavLink>
            <NavLink to="Login">Login</NavLink>
        </div>
    );
}

export default Navbar;