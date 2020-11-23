
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <div className="navbar">
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/exhibits">exhibits  </Link>
            <Link to="/gallery">gallery</Link>
            <Link to="/contact">contact</Link>
        </div>
    )
}
export default NavBar;
