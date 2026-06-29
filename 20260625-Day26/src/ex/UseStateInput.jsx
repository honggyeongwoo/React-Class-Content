// UseStateInput.jsx

import React, { useState } from 'react'

export default function UseStateInput() {

  let [name, setName] = useState("");
  return (
    <div>
      <h2>입력창에 입력을 하면 저장!</h2>
      <h3>첫번째 input 저장</h3>
      
      <input type="text" 
        onChange={(event)=>{
          console.log(event.target.value);
          setName(event.target.value)
        }}
        
        
      />
      <p>현재 입력값-이름: {name}</p>
    </div>
  )
}
