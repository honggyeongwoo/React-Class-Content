// UseStateTest2.jsx
import React, { useState } from "react";

export default function UseStateTest2() {
  // 1. 아이디랑 패스워드 저장하기 (입력)

  // 처음에는 아이디값이 비어있다!
  let [아이디, set아이디] = useState("");
  let [비밀번호, set비밀번호] = useState("");

  // 버튼 클릭시 값이 변경되는 것!
  let [숫자, set숫자] = useState(0);

  let 이미지들 = ["/project1.webp", 
                  "/project2.webp", 
                  "/project3.webp", 
                  "/project4.webp", 
                  "/project5.webp",
  ]

  let [순번, set순번] = useState(0);

  return (
    <div>
      <h2>이미지가 클릭되면 변경되게</h2>
      <img width={100}
            src={이미지들[순번]}
            alt=""
            onClick={()=>{
              set순번(순번 +1);
            }}
            />
      <br />
      <hr />
      <h2>이미지가 클릭되면 변경되게</h2>
      <img width={100}
            src={"project" + 순번 + ".webp"}
            alt=""
            onClick={()=>{
              set순번(순번 +1);
            }}
            />
      <br />

            <h2>이미지가 클릭되면 변경되게</h2>
      <img width={100}
            src={`project${순번}.webp`}
            alt=""
            onClick={()=>{
              set순번(순번 +1);
            }}
            />
      <br />

      <hr />
      <hr />
      <h2>버튼 클릭시 1씩 증가</h2>
      <button
        onClick={() => {
          // 클릭했을 때 바로 실행해라!
          // 함수를 간단하게 적는 화살표 함수!
          // 값을 변경할 때 쓴다!
          set숫자(숫자 + 1);
        }}
      >
        1씩 증가
      </button>
      <h3>변경된 숫자: {숫자}</h3>

      <h2>아이디를 입력하세요</h2>
      <input
        type="text"
        onChange={(이벤트) => {
          set아이디(이벤트.target.value);
        }}
      />

      <h2>비밀번호를 입력하세요</h2>
      <input
        type="text"
        onChange={(이벤트) => {
          set비밀번호(이벤트.target.value);
        }}
      />

      <h3>입력한 값: {아이디}</h3>
      <h3>입력한 비밀번호: {비밀번호}</h3>
    </div>
  );
}