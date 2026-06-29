// BgChange.jsx

import React, { useState } from 'react'

export default function BgChange() {

  let [bgColor, setBgColor]= useState(false);

  return (
    <div className={bgColor ? "my-bg" : "box"}>
      <h2>mY</h2>
      <button
        onClick={()=>{
          setBgColor(!bgColor);
        }}
      >배경변경</button>
    </div>
  )
}
