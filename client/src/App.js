import React from 'react';

import Navbar from './Components/Navbar/Navbar.js';
import Chat from './Components/chat/Chat';
import Join from './Components/join/Join';
import './App.css';


import { BrowserRouter as Router, Route } from "react-router-dom";









const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Navbar} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;