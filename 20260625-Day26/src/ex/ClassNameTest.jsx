// ClassNameTest.jsx

import React, { useState } from 'react'

export default function ClassNameTest() {

  let [red, setRed] = useState(false);
  


  return (
    <div>
      <h2>useState이용한 css 디자인 설정?</h2>
      <h3 className={red ? "red" : "title"}>나는 변경이에요</h3>
      <button
        onClick={()=>{
          setRed(!red);
        }}
      >색 변경</button>
    
    </div>
  )
}
