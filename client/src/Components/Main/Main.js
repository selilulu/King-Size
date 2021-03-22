import React from 'react'
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route.js';
import Login from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from "react-bootstrap";
import "./main.css";




// function clickMe(){
// alert('you clicked me ');
// }



class  Main extends React.Component {
    

    render() {
      return (
      <Router>
        <div className='main'>  
            <div className='main-container'> 
              <div className='main-body'>
                <h1 className='main-title'>
                </h1>
                  <div className='main-divtext'>
                    <p className='main-text'>
                    <span>Discover</span><br/> our language<br/> activities with<br/> <strong> Speacty!</strong>   
                    </p>
                    <div className="main-divbutton">
                   <Link className="main-button"to='/Login'>JOIN US</Link>
                  
                  </div>
                  </div>
                  {/* <p>Here at Speacty anyone can team up and make activites to learn a language together.</p> */}
                  
              </div>
            </div>
        </div>
          <Switch>
              <Route exact strict path='/Login'>
                <Login/>
              </Route>
          </Switch>

      </Router>
    );
  }
  }
  
  export default Main;