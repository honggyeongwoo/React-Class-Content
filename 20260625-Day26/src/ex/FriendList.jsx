// FriendList.jsx

import React, { useState } from 'react'
import FriendButton from '../component/FriendButton';



export default function FriendList() {

  let [name, setName] = useState([]);

  return (
    <div>

    <FriendButton name="영희" onClick={() => {setName([...name, "영희"])}} />
    <FriendButton name="철수" onClick={() => {setName([...name, "철수"])}} />
    <FriendButton name="지민" onClick={() => {setName([...name, "지민"])}} />
    <FriendButton name="수영" onClick={() => {setName([...name, "수영"])}} />

      <hr />
      <h3>{ name }</h3>
    </div>
  )
}
