
import React from 'react'

export default function Feed({ name, path, content }) {
  return (
    <div>
      <div className="feed">
        <h3>{ name }</h3>
        <img src={ path } alt="" />
        <p>{ content }</p>
        <button>좋아요</button>
      </div>
    </div>
  )
}
