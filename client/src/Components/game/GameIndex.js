import React from 'react';
import {BrowserRouter as Router,Link, Route} from "react-router-dom";
import './GameIndex.css';

export default function IndexPage() {
  return (
    <main className="entire-box">
      
      <div className="content-links">
      <div className="inner-wrapper">
        <h1>You Can Practice Dutch or French with a Word-Matching Game,Just Click & Have Fun! </h1>
      <ul>
        <li>
        <Link to="/gamede" className="main-button gameIndex" >
            <a>Practice Dutch</a>
          </Link>
        </li>
        <li>
        <Link to="/gamefr"className="main-button gameIndex" >
        <a>Practice French</a>
            </Link>
         
        </li>
      </ul>
      </div>
      </div>
    </main>
  );
  
}