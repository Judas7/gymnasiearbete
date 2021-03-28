import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1 className="headerTitle">
                <Link to ="/" className="homeLink">Gymnasiearbete</Link>
            </h1>
        </header>
    )
}

export default Header

