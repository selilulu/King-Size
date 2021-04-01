import React from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Chat from './Components/chatroom/components/chat/Chat';
import Join from './Components/chatroom/components/join/Join';
import Login from './Components/Login/Login.js';
import Game from './Components/Events/Game.js';
import Main from './Components/Main/Main.js';
import GameDetails from './Components/Events/GameDetails.js';




import './App.css';


import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <Router>
      <Route path="/" exact component={Navbar} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/login" exact component={Login}/>
      <Route path="/Game" exact component={Game}/>
      <Route path="/GameDetails" exact component={GameDetails}/>
      <Route path="/main" exact component={Main}/>

    </Router>
    </>
  );
}

export default App;