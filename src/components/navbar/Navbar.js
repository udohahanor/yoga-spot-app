import React from 'react';
import './Navbar.css';

import { BiSearch } from 'react-icons/bi';


export const Navbar = () => {
    return (
        <div className="hero">
            <div className="logo">Yogaspot</div>
            <ul className="navlinks">
                <li>Blog</li>
                <li>Video</li>
                <li>Tutor</li>
            </ul>
            <BiSearch color="white" size="21px" />
        </div>
    )
}
export default Navbar;