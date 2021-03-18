import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import './Navbar.css';
import { Link } from 'react-router-dom';



 class Navbar extends React.Component { 
     
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Toegelang</h1>
                <div className='menu-icon'>
                     
                </div>
                <ul className='nav-menu'>
                    {MenuItems.map((item,index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url} Link to='{ item.url }'>
                                { item.title }
                            </a>
                            <Link to=" { item.url } "></Link>
                            </li>
                        
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar