import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="home text-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="about text-dark" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="services text-dark" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="contact text-dark" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}