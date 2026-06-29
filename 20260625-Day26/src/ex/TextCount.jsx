// TextCount.jsx

import React, { useState } from 'react'

export default function TextCount() {

  let [text, setText] = useState("");
  return (
    <div>
      <input type="text"
              onChange={(e)=>{
                setText(e.target.value);
              }}
      />

      <h3>글자수 : {text.length} </h3>

      <h3>{text.length >= 4 ? "사용가능" : "4자 이상 입력 하세요"}</h3>
    </div>
  )
}
