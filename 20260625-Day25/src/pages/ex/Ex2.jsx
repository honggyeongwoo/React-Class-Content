import React, {useState} from 'react'

export default function Ex2() {

  let [색상, set색상] = useState("");

  return (
    <div>
      <input type="text" placeholder='색상을 입력하세요 ex) red, blue ..' 
              onChange={(event)=>{
                set색상(event.target.value);
              }}
      />

      <p style={{ color: 색상 }}>색상이 변하나요?</p>
              
    </div>
  )
}
