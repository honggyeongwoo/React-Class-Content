import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>리액트 버전 확인</h2>
      <p>npm list react</p>

      <h2>설치된 파일은 버전 확인 필수!</h2>
      <p>npm ls (list)</p>    
      <p>현재 폴더에 있는 파일과 폴더 목록을 보여주는 명령어</p>
    </>
  )
}

export default App
