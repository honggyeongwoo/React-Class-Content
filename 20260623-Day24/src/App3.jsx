// App3.jsx
import React from "react";

// 자바스크립트랑 리액트랑 거의 똑같다!
// 변수 선언도 똑같고 함수 선언도 똑같다!
// 이벤트도 똑같다! on~
function 인사() {
  //매번 실행하는 함수!
  console.log("안녕하세요!");
}

export default function App3() {
  return (
    <div>
      <h2>자바스크립트와 리액트 차이점</h2>
      <p>버튼을 클릭했을 때 인사() 바로 실행이된다!</p>
      <p>리액트는 함수이름옆에 () 즉시 실행해라! </p>
      <h2>인사() 이것은 그냥 켜지면 즉시 실행됨.</h2>
      <button onClick={인사()}>실행</button>
      <h2>괄호없이 함수명만 작성시, 클릭할때만 실행됨</h2>
      <button onClick={인사}>실행</button>
    </div>
  );
}