import React from 'react'
import FirstPage from './pages/FirstPage';

export default function ContrlTest() {

let 로그인 = false;

let 페이지 = true;

  
  return <div>
          <h2>페이지 가져오기</h2>
          <br />
          <hr />
          
          {페이지 && <FirstPage />}

          <h2></h2>    
          {로그인 && <h2>환영합니다.</h2>}
          <hr />  
          {true && <p>참이면 보여요 ㅋ</p>}
          {false && <p>구라면 ㅅㄱㅇ ㅋ</p>}
          <hr />
      </div>  ;

let 쿠폰 = true;
  
  return <div>

          {쿠폰 && <button></button>}
      </div>  ;
}
