import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            {/* Logo / Brand */}
            <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text">
                    <i className="fa fa-book me-3"></i>NEDATS
                </h2>
            </Link>

            {/* Navbar Toggler (for mobile) */}
            <button
                type="button"
                className="navbar-toggler me-4"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible Menu Items */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/" className="nav-item nav-link active">
                        Home
                    </Link>
                    <Link to="/about" className="nav-item nav-link">
                        About
                    </Link>
                    <Link to="/courses" className="nav-item nav-link">
                        Courses
                    </Link>
                    <div className="nav-item dropdown">
                        <Link
                            to="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </Link>
                        <div className="dropdown-menu fade-down m-0">
                            <Link to="/team" className="dropdown-item">
                                Our Team
                            </Link>
                            <Link to="/testimonial" className="dropdown-item">
                                Testimonial
                            </Link>
                            <Link to="/404" className="dropdown-item">
                                404 Page
                            </Link>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">
                        Contact
                    </Link>
                </div>
                <Link
                    to="/join"
                    className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
                >
                    Login
                    <i className="fa fa-arrow-right ms-3"></i>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
