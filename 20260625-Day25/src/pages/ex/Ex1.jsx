import React, {useState} from 'react'

export default function ex1() {

  let [좋아요, set좋아요] = useState(0);

  return (
    <div>
      <p> {좋아요} </p>
      <button
        onClick={()=>{
          set좋아요(좋아요 +1);
        }}
      >좋아요 버튼</button>
      
    </div>
  )
}
