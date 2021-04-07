import React, { useState, useEffect } from "react";
import data from './data'
import random from './random'
import "./Game.css";
export default function Game() {
  const synthRef = React.useRef(window.speechSynthesis);
  const [choices, setChoices]= useState([]);
  const [current, setCurrent ] = useState(null);
  const [selected, setSelected ] = useState({});
  const [EngVoices, setngVoices ] = useState([]);

  const [FrenVoices, setFrenVoices ] = useState([]);

  const [EngVoice, setEngVoice] = useState(null);

  const [FrenVoice, setFrenVoice] = useState(null);
useEffect(()=>  {
setTimeout(() => {
  const voices = synthRef.current.getVoices();
  console.log(voices)
}, 100);

}, [])

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
const isMatch = (valueA, valueB) => 
data.fr.pairs.some(
([choiceA,choiceB]) => 
(valueA === choiceA && valueB === choiceB) ||
(valueA === choiceB && valueB === choiceA)


);

const choose = (choice) => {
const utter = new SpeechSynthesisUtterance(choice.value);
synthRef.current.speak(utter);
if(current){
if (isMatch(current.value, choice.value)){
  setSelected({...selected, [choice.value]: true});
}else{
  setSelected({...selected, [current.value]: false});
}
setCurrent(null);
}else{
setSelected({...selected, [choice.value]: true});
setCurrent(choice);
}
};

console.log(selected)
  
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
<button  onClick={() => 
                choose(choice)
              } 
              
              className={current && current.value === choice.value ? "selcted": "" 
            }
              disabled={!!selected [choice.value]}
              
              >{choice.value}</button>

</li>

    ))}
    </ul>
    </>
);
 

   
    
 
}