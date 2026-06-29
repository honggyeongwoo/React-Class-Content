// SearchArray.jsx

import React, { useState } from 'react'

export default function SearchArray() {

  let [history, setHistory] = useState([])
  let [search, setSearch] = useState([])

  return (
    <div>
    <input type="text" placeholder='검색어 입력'
            onChange={(e)=>{
              setSearch([e.target.value]);
            }}
    />
    <button
      onClick={()=>{
        setHistory([...history, search]);
        
      }}
    >검색</button>

    <h3>검색기록 : {history.join(", ")}</h3>
    </div>
  )
}
