import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let number = 20;
  console.log(number);

  let counter = 0;

  let search = "";

  return (
    <>
      <h1>usestate?</h1>
      <p>현재 변수 number : {number}</p>
      <hr />

      <h2>입력값 받기</h2>
      <input type="text" 
              placeholder='입력'
              onChange={(event)=>{
                console.log(event.target);
                console.log(event.target.value);
                search = event.target.value;
              }}
              />

      <br />
      <h3>입력한 값: {search}</h3>
      

      <hr />
      <h2>버튼을 클리갛면 화면에 증가하기</h2>
      <h3>{counter}</h3>
      <button onClick={()=>{
        counter = counter +1;
        console.log("증가함:", counter)
      }}>눌럽</button>
    </>
  )
}

export default App
