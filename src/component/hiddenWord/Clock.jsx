import React, { useEffect, useRef, useState } from 'react'

export default function HiddenWord() {
    const [seconds, setSeconds] = useState(0); 
    const [isActive, setIsActive] = useState(false); 
    const timerRef = useRef(null); 
  
    useEffect(() => {
      if (isActive) {
        timerRef.current = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1); 
        }, 1000); 
  
      } else {
        clearInterval(timerRef.current); 
      }
      return () => clearInterval(timerRef.current)
    }, [isActive]);
  
    const toggle = () => {
      setIsActive(!isActive); 
    };
  
    const reset = () => {
      setIsActive(false);
      setSeconds(0); 
    };
  
    return (
      <div className="timer">
        <h1>{seconds}s</h1> 
        
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'} 
        </button>
  
        <button onClick={reset}>Reset</button> 
      </div>
    );
}
