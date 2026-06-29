// DarkMode.jsx

import React, { useState } from 'react'

export default function DarkMode() {

  let [dark, setDark]= useState(false);
  console.log("현재값:", dark);
  return (
    <div className={dark ? "lightmode" : "darkmode"}>
      <h2>웹페이지</h2>
      <p>다크모드 또는 라이트모드 전환</p>

      <p>{dark +""}</p>

      <button
        onClick={()=>{
          setDark(!dark);
        }}
      >모드 변경</button>

      <h3>{dark ? "라이트모드" : "다크모드"}</h3>



    </div>
  )
}
