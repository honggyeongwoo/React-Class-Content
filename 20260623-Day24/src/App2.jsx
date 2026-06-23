import React, { useState } from 'react'



export default function App2() {
  const [count, setCount] = useState(0);

function 증가(){
  setCount(count + 1);
  // count = count + 1;
  console.log(count);
}

  return (
    <div>
      <div>
        <h2>버튼을 누르면 1씩 증가</h2>
        <p>변수, 함수</p>
        <button onClick={증가}>숫자 증가 합니다</button>

        <p>{count}</p>

      </div>
    </div>
  )
}
