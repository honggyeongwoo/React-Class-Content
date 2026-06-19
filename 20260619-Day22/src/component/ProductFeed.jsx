

import React from 'react'

export default function ProductFeed({ path, name, price }) {
  return (
      <div className="card">
        <img src={ path } alt="" />
        <h3>{ name }</h3>
        <p>{ price }</p>
      </div>
  )
}
