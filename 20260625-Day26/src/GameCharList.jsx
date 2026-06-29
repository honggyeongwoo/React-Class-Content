// GameCharList.jsx

import React, { useState } from 'react';

export default function GameCharList() {
  let [char, setChar] = useState([]);
  console.log("현재 저장된 배열:", char);

  return (
    <div>
      <div className='wrap'>
        <div className='boxx'>
          <img width={100} height={100} src="/ryan.png" alt="라이언"
            onClick={() => setChar([...char, { name: "라이언", price: 3000 }])}
          />
          <h2>라이언</h2>
          <p>3000원</p>
        </div>

        <div className='boxx'>
          <img width={100} height={100} src="/mu.webp" alt="무지"
            onClick={() => setChar([...char, { name: "무지", price: 2000 }])}
          />
          <h2>무지</h2>
          <p>2000원</p>
        </div>

        <div className='boxx'>
          <img width={100} height={100} src="/ap.webp" alt="어피치"
            onClick={() => setChar([...char, { name: "어피치", price: 1000 }])}
          />
          <h2>어피치</h2>
          <p>1000원</p>
        </div>
      </div>

      <h3>선택한 캐릭터</h3>
      {char.map((item, i) => (
        <p key={i}>
          {item.name} - {item.price}원
        </p>
      ))}

      <hr />

      <p>
        총 합계: {char.reduce((total, item) => total + item.price, 0)}원
      </p>
    </div>
  );
}