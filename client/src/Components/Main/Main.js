import React from 'react'
import {BrowserRouter as Router,Link, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Card} from "react-bootstrap";
import "./main.css";


class  Main extends React.Component {

    render() {
      return (
      
        <div className='main'>  
            <div className='main-container'> 
              <div className='main-body'>    
                  <div className='main-divtext'>
                    <p className='main-text'>
                    <span>Discover</span><br/> our language<br/> activities with<br/> <strong> Speacty!</strong>   
                    </p>
                    <div className="main-divbutton">
                   <Link className="main-button"to='/Login'>JOIN US</Link>
                  </div>
                  </div>
              </div>
            </div>
        </div>
        
         

     
    );
  }
  }

  
  
  export default Main;