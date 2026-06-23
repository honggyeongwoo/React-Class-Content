import React from 'react'
import Topic from '../component/Topic';

export default function HotTopic() {

  let 현재페이지번호 = 1;

  const 기준된고정값 = 60;

  console.log("현재번호:", 현재페이지번호);
  console.log("기준된고정값:", 기준된고정값);


  
  return (
    // 한 그룹 일때는 section 을 선호
    <div className='wrap'>
  
      <div className='hot-topics'>
        <div className='title-topics'>
          <p><span>핫토픽</span> &gt; 타임랩스</p>

          <ul>
            <li className='click-active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>

        <div className='content-topics'>

          <Topic 
            path="/image1.jpg" /* /를 붙이면 public을 기준으로 가져오겠다. 붙여쓰자 */
            title="선집사의 선인장 키우기"       
          />
          <Topic 
            path="/image2.jpg"
            title="선집사의 휴식기"          
          />
          <Topic 
            path="/image3.jpg"
            title="선집사의 관찰하기"         
          />      
        </div>
      </div>      
    </div>
  )
}
