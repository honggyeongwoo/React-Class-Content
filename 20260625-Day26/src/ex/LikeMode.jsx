// LikeMode.jsx

import React, { useState } from 'react'

export default function LikeMode() {

  let [like, setLike] = useState(false);
  return (
    <div>
      <h2>좋아요</h2>
      <h3>{like ? "하트" : "빈하트"}</h3>

      <button
        onClick={()=>{
          setLike(!like);
        }}
      >마음표시</button>
    </div>
  )
}
