import React, { Component } from 'react';
import './Navbar.css';
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route.js';
import Main from '../Main/Main';
import Login from '../Login/Login';

 class Navbar extends React.Component { 

 

    render() {
        return(
            <Router>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Toegelang</h1>
                <div className='menu-icon'>
                    <ul className='nav-menu'>
                    <li className=''>
                        <Link to="/Main">Main</Link>
                    </li>  
                    <li className=''>
                        <Link to="/CHAT">chat</Link>
                    </li> 
                                         
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact strict path="/Main">
                    <Main/>
                </Route>
                <Route exact strict path="/Login">
                    <Login/>
                </Route>
               

        </Switch>
        </Router>
        )
    }

 }

export default Navbar;