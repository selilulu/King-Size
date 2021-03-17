import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import './App.css';
import Main from './Components/Main/Main';


class  App extends React.Component {
    

  render() {
    return (
    <div className="app">
      <Navbar />
      <Login />
    </div>
  );
}
}

export default App;
