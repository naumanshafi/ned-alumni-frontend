import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">Alumni Portal</h1>
                <nav className="nav">
                    <ul className="nav-links">
                        <li>
                            <Link to="/register" className="nav-link">Register</Link>
                        </li>
                        <li>
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
