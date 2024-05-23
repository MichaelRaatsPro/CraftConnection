// Mascot.jsx
"use client"
import React, { useContext, useState} from 'react';
import { SpeechContext } from './SpeechContext.jsx';
 
const Mascot = (isVis) => {
  const { speechMessage } = useContext(SpeechContext);
  const [isVisible, setIsVisible] = useState(true); 

  const mascotStyle =  {
    position: "absolute",
    bottom: "44%",
    right: "15%",
    // border: "solid red",
    visibility: isVisible ? 'visible' : 'hidden',
    userSelect: "none",
    width: "auto",
    height: "45vh"
    
  }


  return (
    <>
    <div style = {mascotStyle}>
      <img 
        src = {speechMessage.includes("Error")? "/mascotError.png" : "/mascot.png"} 
        style={{  
          border: "none",
          width: "100%",
          height: "100%",
          zIndex: "1" ,
          padding: "0",
          margin: "0"
        }} 
      />
      <textarea 
        readOnly 
        id="messageSpeech" 
        style={{ 
          transform: "translateY(-320%) translateX(20%)",
          zIndex: "2", 
          width: "50%", 
          height: "30%", 
          resize: "none" ,
          border: "none",
          fontSize: "20px",
          overflow: "hidden"
        }} 
        value={speechMessage}
      />
      </div>
    </>
  );
};

export default Mascot;
