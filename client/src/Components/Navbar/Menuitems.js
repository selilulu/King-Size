//import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>


export const MenuItems = [
    {
        title: 'Main',
        url:<Link to='/Main'></Link>,
        cName:'nav-links'
    },
    {
        title: 'Contact us',
        url:'#',
        cName:'nav-links'
    },
    {
        title: 'Log in',
        url:<Link to='/Login'></Link>,
        cName:'nav-links'
    },
    {
        title: 'Sign up',
        url:'#',
        cName:'nav-links'
    }
]