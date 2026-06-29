// UseStateTest.jsx

import React, { useState } from 'react'

export default function UseStateTest() {

  let [숫자, set숫자] = useState(0);

  return (
    <div>
      <h2>useState?</h2>

      <h3>실제 useState</h3>
      <p>현재숫자: {숫자}</p>
      <button
        onClick={()=>{
          set숫자(숫자 +1);
        }}
        
        >온클릭</button>

      <hr />
      <p>화면에 보이는 변수!</p>


      
    </div>
  )
}
