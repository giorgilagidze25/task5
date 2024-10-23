import React, { useState } from 'react'



export default function Clock() {
    const hiddenWord = 'hiddenWord'; 

    const [typedWord, setTypedWord] = useState('');  
    const [wordFound, setWordFound] = useState(false); 
  
    const handleInputChange = (event) => {
      const newTypedWord = event.target.value;  
      setTypedWord(newTypedWord);
  
      if (newTypedWord === hiddenWord) {
        setWordFound(true);
      } else {
        setWordFound(false);  
      }
    };
  
    return (
      <div className="App">
        <h1>სეკრეტ სიტყვაა hiddenWord</h1>
  
        <input 
          type="text" 
          value={typedWord} 
          onChange={handleInputChange} 
          placeholder="ჩაწერე სეკრეტ სიტყვა" 
        />
  
        {wordFound && <h2>სწორიხარრ</h2>}
        
        <p>სიტყვა: {typedWord}</p>
      </div>
  )
}
