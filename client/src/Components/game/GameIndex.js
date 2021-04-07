import React from 'react';
import {BrowserRouter as Router,Link, Route} from "react-router-dom";

export default function IndexPage() {
  return (
    <main>
      <h1>
        <Link href="/">
          <a>
            
            <img src="./matching.jpg" />
          </a>
        </Link>
      </h1>
      <ul>
        <li>
        <Link to="/gamede" >
            <a>Practice Dutch</a>
          </Link>
        </li>
        <li>
        <Link to="/gamefr" >
        <a>Practice French</a>
            </Link>
         
        </li>
      </ul>
    </main>
  );
  
}