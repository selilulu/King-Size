import React, { useState, useEffect } from "react";
import data from './data'
import random from './random'
import "./Game.css";
export default function GameDe() {
  const synthRef = React.useRef(window.speechSynthesis);
  const [choices, setChoices]= useState([]);
  const [current, setCurrent ] = useState(null);
  const [selected, setSelected ] = useState({});
  const [EngVoices, setEngVoices ] = useState([]);

  const [DeVoices, setDeVoices ] = useState([]);

  const [EngVoice, setEngVoice] = useState(null);

  const [DeVoice, setDeVoice] = useState(null);
useEffect(()=>  {
setTimeout(() => {
  const voices = synthRef.current.getVoices();

  const voiceA = voices.filter((voice)=> voice.lang.substr(0,2) === data.de.langA.code);
  setEngVoices(voiceA);
  setEngVoice(random (voiceA))


  const voiceB = voices.filter((voice)=> voice.lang.substr(0,2) === data.de.langB.code);
  setDeVoices(voiceB);
  setDeVoice(random (voiceB))
  console.log(voices)
}, 100);

}, [])

useEffect(()=>{
let all = data.de.pairs.flatMap(([valueA, valueB]) => 
  [
    {lang: data.de.langA.code, value: valueA},
    {lang: data.de.langB.code, value: valueB}
]
);
let sorted = all.sort(()=> Math.random() - 0.5);
setChoices(sorted);
}, [data.de.pairs]);
console.log(data.de.langA.code)
const isMatch = (valueA, valueB) => 
data.de.pairs.some(
([choiceA,choiceB]) => 
(valueA === choiceA && valueB === choiceB) ||
(valueA === choiceB && valueB === choiceA)


);

const choose = (choice) => {
const utterThis= new SpeechSynthesisUtterance(choice.value);

utterThis.voice = choice.lang === data.de.langA.code ? EngVoice : DeVoice;
synthRef.current.speak(utterThis);
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
const reset = () => {
  setCurrent(null);
  setSelected({});
};
  
return (
<>
<a>Practice French</a>
<h2>Choose your accent</h2>
<div className="luanguages">
<ul className= "voices">
<li>{data.de.langA.name}:</li>
          {EngVoices.map((voice) => (
            <li key={voice.name}>
              <button
                onClick={() => {
                  setEngVoice(voice);
                }}
                className={
                  EngVoice && EngVoice.name === voice.name ? "selected" : ""
                }
              >
                {voice.name}
              </button>
            </li>
          ))}
        </ul>
<ul className= "voices">
  <li>{data.de.langB.name}:</li>
          {DeVoices.map((voice) => (
            <li key={voice.name}>
              <button
                onClick={() => {
                  setDeVoice(voice);
                }}
                className={
                  DeVoice && DeVoice.name === voice.name ? "selected" : ""
                }
              
              >
                {voice.name}
              </button>
            </li>
          ))}
        </ul>
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
    <button className="reset" onClick={() => reset()}>
        reset
      </button>
    </>
);
 

   
    
 
}