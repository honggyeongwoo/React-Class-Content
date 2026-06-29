// UseObjectTest.jsx
import React, { useState } from "react";

// 학생들의 정보를 저장하는 객체 타입으로
// useState쓰기!
export default function UseObjectTest() {
  // 미리 처음 값을 설정해놓을 수도 있다.
  let [stu, setStu] = useState({});
  return (
    <div>
      <h2>useState이용해서 객체 타입으로 저장하기</h2>
      <button
        onClick={()=>{
          setStu(...stu,{
            name: "이완",
            age: 20,
          });
        }}
      >학생 1</button>

      <button
        onClick={()=>{
          setStu(...stu,{
            name: "흰줌",
            age: 10,
          });
        }}
      >학생 2</button>      
      <hr />

      <h3> 학생 정보: {JSON.stringify(stu)} </h3>  
    </div>
  );
}