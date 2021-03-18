import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';



 class Navbar extends React.Component { 

 

    render() {
        return(
            <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Toegelang</h1>
                <div className='menu-icon'>
                    <ul className='nav-menu'>
                    <li className=''><Link to="/Main">Main</Link></li>                           
                    </ul>
                </div>
            </nav>
            </Router>
        )
    }

 }

export default Navbar;