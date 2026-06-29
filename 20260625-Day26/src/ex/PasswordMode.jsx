// PasswordMode.jsx

import React, { useState } from 'react'

export default function PasswordMode() {

  let [show, setShow] = useState(false);
  return (
    <div>
      <h2>보이기/모자이크</h2>
      <h3>{show ? "👁️ 보기" : "🙈 숨기기"}</h3>

      <button
        onClick={()=>{
          setShow(!show)
        }}
      >전환</button>

      <h3>이?</h3>
      <input type={show ? "text" : "password"} />
      
          </div>
    
  )
}

