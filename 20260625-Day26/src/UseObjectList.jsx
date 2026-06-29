// UseObjectList.jsx

import React, { useState } from 'react'

export default function UseObjectList() {

  let [student, setStudent] = useState([]);

  return (
    <div>
      <button
        onClick={()=>{
          setStudent([...student,
            {
            name: "이완",
            age: 20,
          }
        ]);
        }}
      >학생 1</button>

      <button
        onClick={()=>{
          setStudent([...student,
            {
            name: "흰줌",
            age: 10,
          }
        ]);
        }}
      >학생 2</button>   

      <h3> 학생 정보: {JSON.stringify(student)} </h3>            
    </div>
  )
}
