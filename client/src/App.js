import React from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import './App.css';


class  App extends React.Component {
    

  render() {
    return (
    <div className="app">
      <Navbar />
    </div>
  );
}
}

export default App;
