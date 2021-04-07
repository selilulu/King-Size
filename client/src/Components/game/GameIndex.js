import React from 'react';
import {BrowserRouter as Router,Link, Route} from "react-router-dom";

export default function IndexPage() {
  return (
    <main>
      <h1>
        <Link href="/">
          <a>
            
            <img src="/home/houdid/becode/King-Size/client/src/Components/game/pages/matching.jpg" />
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