import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className={`${style.cont} container`}>
                    <a className="navbar-brand" href="#">
                        <img src="assets/imgs/logo.png" alt="logo" width={100}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">Movies</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        )
    }
}
