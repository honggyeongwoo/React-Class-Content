import React from 'react'

export default function Post({ catagory, date, title, content }) {
  return (
    <div>
      <div className='content'>
        <div className='content-info'>
          <p>{ catagory }</p>
          <p>{ date }</p>
          <h2>{ title }</h2>
          <p>{ content }</p>
        </div>
      </div>
    </div>
  )
}
