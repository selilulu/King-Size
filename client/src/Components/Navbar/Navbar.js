import React, { useState } from 'react';
import { Button } from './Button';
import { Link, BrowserRouter as  Router, Route, } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

/*import  Route  from 'react-router-dom/Route.js';*/
import Main from '../Main/Main';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import Events from '../Events/Events';
import Game from '../Events/Game.js';
import GameDetails from '../Events/GameDetails.js';
import Game from '../Events/Game.js';

import Join from '../chatroom/components/join/Join.js';
import Chat from '../chatroom/components/chat/Chat.js';

<<<<<<< HEAD
       
      
          
        const logoutHandler =()=>{
            localStorage.removeItem("authToken");
            <Redirect to="/login" />
            }

     return (
     
     <Router>
        <nav className="NavbarItems">
            <h1 className="navbar-logo">SPEACTY</h1>
            <div className='menu-icon'>
                <ul className='nav-menu'>
                <li>
                    <Link className='nav-links' to="/Main">Main</Link>
                </li>  
                <li >
                    <Link className='nav-links' to="/Login">Login</Link>
                </li>    
                <li >
                    <Link className='nav-links' to="/Signup">Signup</Link>
                </li>
                <li >
                    <Link className='nav-links' to="/Events">Events</Link>
                    
                </li>
                <li >
                    <Link className='nav-links' onClick= {logoutHandler}>LOGOUT</Link>
                    
                </li>
                
                </ul>
            </div>
        </nav>
        <PrivateRoute exact path="/" component={Private} />

        <Route path="/main" exact component={Main}/>
        <Route path="/join" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/events" exact component={Events}/>
        <Route path="/gameDetails" exact component={GameDetails}/>
        <Route path="/game" exact component={Game}/>
        <Route path="/participants" exact component={Participants}/>


        <Route path="/forgotpassword" exact component={ForgotPassword}/>
        <Route path="/resetpassword/:resetToken" exact component={Resetpassword}/>

        <Route path="/onlinegame" exact component={GameIndex}/>
        <Route path="/gamefr" exact component={GameFr}/>
        <Route path="/gamede" exact component={GameDe}/>





=======
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1085) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1085) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
      <Router>
    
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          SPEACTY
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/main' className='nav-links' onClick={closeMobileMenu}>
              Main
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/events'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Events <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Log in
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Log out
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
            
          </li>
          
        </ul>
        <Button />
>>>>>>> f348d06c556ea672a9c7eec33b3fbb5c32aadd14
        
      </nav>
    
 
    {/* <Route  path="/" component={Main} />  */}

    <Route path="/main" exact component={Main}/>
    <Route path="/join" exact component={Join} />
    <Route path="/chat" exact component={Chat} />
    <Route path="/Login" exact component={Login}/>
    <Route path="/Signup" exact component={Signup}/>
    <Route path="/events" exact component={Events}/> 
    <Route path="/game" exact component={Game}/> 
    <Route path="/gameDetails" exact component={GameDetails}/>
    {/* <Route path="/forgotpassword" exact component={ForgotPassword}/>  */}
    {/* <Route path="/resetpassword/:resetToken" exact component={Resetpassword}/> */}
</Router>
  );
}

export default Navbar;