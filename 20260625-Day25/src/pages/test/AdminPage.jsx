import React, { useState } from 'react'

export default function AdminPage() {

  let [이름, set이름] = useState("");
  let [전화번호, set전화번호] = useState("");
  let [주소, set주소] = useState("");

  let [고객정보들, set고객정보들] = useState([]);
  return (
    <div className='user-group max-container'>

    <h2>관리자 페이지</h2>
    <hr />
    <h3>고객 정보 추가</h3>

    <input type="text" placeholder='이름' 
            onChange={(event)=>{
              set이름(event.target.value);
              console.log(event.target.value)

            }}  />
    <br />
    <input type="text" placeholder='전화번호'
            onChange={(event)=>{
              set전화번호(event.target.value);
              console.log(event.target.value)    
            }}/>
    <br />
    <input type="text" placeholder='주소'
            onChange={(event)=>{
              set주소(event.target.value);
              console.log(event.target.value)    
            }}/>

    <hr />
    <h3>고객 정보</h3>
    <p>이름: {이름}</p>
    <p>전화번호: {전화번호}</p>
    <p>주소: {주소}</p>

    </div>
  )
}
