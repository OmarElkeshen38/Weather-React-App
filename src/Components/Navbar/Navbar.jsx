import React from 'react';
import logoImg from '../../Images/logo.png';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container px-5">
                    <a className="navbar-brand hstack" href="#">
                        <img
                            src={logoImg}
                            className="w-100"
                            alt="logo"
                        />
                        <h1 className="fs-6 mb-0 ms-3">
                            Weather<br />
                            <span>tagline goes here</span>
                        </h1>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href=""
                                >Home</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=""
                                >News</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=""
                                >Live cameras</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=""
                                >Photos</a
                                >
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=""
                                >Contact</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
