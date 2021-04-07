import React, { useState, useEffect } from "react";
import data from './data'
import random from './random'
import "./Game.css";
export default function Game() {
  const synthRef = React.useRef(window.speechSynthesis);
  const [choices, setChoices]= useState([]);
  
useEffect(()=>{
let all = data.fr.pairs.flatMap(([valueA, valueB]) => 
  [
    {lang: data.fr.langA.code, value: valueA},
    {lang: data.fr.langB.code, value: valueB}
]
);
let sorted = all.sort(()=> Math.random() - 0.5);
setChoices(sorted);
}, [data.fr.pairs]);
console.log(data.fr.langA.code)

const choose = (choice) => {
const utter = new SpeechSynthesisUtterance(choice.value);
synthRef.current.speak(utter);
}


  
return (
<>
<a>Practice French</a>
<h2>Choose your accent</h2>
<div className="luanguages">
<ul className= "voices"></ul>
<ul className= "voices"></ul>
</div>
<h2>Choose the pairs</h2>
<ul className= "choices">
    {choices.map((choice)=> (

<li key = {`${choice.lang}-${choice.value}`}>
<button  onClick={() => {
                choose(choice);
              }}>{choice.value}</button>

</li>

    ))}
    </ul>
    </>
);
 

   
    
 
}