// App.jsx

import React, { useState } from "react";
import "./App.css";

export default function App() {

  let [systemMode, setSystemMode] = useState(false);
  console.log(systemMode);
  let [notice, setNotice] = useState(true) ;
  let [wifi, setWifi] = useState(true);

  // 1) 여기에 useState 3개를 선언하세요
  // - 다크모드 상태 (기본값: false)
  // - 알림 상태 (기본값: true)
  // - 와이파이 상태 (기본값: true)


  return (
    <div className={systemMode ? "page" : "darkPage"}>
      {/* 2) 여기에 전체 구조를 작성하세요
          - 다크모드 상태에 따라 className이 바뀌어야 함
            (다크모드 꺼짐: "page"      / 켜짐: "page darkPage")
            (다크모드 꺼짐: "phone"     / 켜짐: "phone darkPhone")
      
          - 제목, 설명 문구
          - 다크모드 / 알림 / 와이파이 각각의 item 영역 (이모지 + 이름 + ON/OFF 버튼)
          - 맨 아래 result 영역 (현재 상태 3줄 출력)        
      */}
<div className={systemMode ? "phone" : "darkPhone"}>
      <h2>설정</h2><br />
      <p>오늘 배운 useState 복습</p>

      <div className="item">
        <h3>다크모드</h3>
        <button 
          className={systemMode ? "button-off" : "button-on"}
          onClick={()=>{
            setSystemMode(!systemMode);
          }}
        >{systemMode ? "OFF" : "ON"}</button>
      </div>

      <div className="item">
        <h3>알림</h3>
        <button
          className={notice ? "button-on" : "button-off"}
          onClick={()=>{
            setNotice(!notice)
          }}
        >{notice ? "ON" : "OFF"}</button>        
      </div>

      <div className="item">
        <h3>와이파이</h3>
        <button
          className={wifi ? "button-on" : "button-off"}
          onClick={()=>{
          setWifi(!wifi)
        }}
        >{wifi ? "ON" : "OFF"}</button>  
      </div>

      <div className="result">
        <h4>현재 상태</h4> <br />
        <p>{systemMode ? "다크모드 : 꺼짐" : "다크모드 : 켜짐"}</p><br />
        <p>{notice ?  "알림 : 켜짐" : "알림 : 꺼짐"}</p><br />
        <p>{wifi ?  "Wifi : 켜짐" : "Wifi : 꺼짐"}</p>
      </div>
      </div>
    </div> 
  );
}