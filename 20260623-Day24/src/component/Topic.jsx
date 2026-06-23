import React from 'react'

export default function Topic({ path, title, }) {
  return (
        <div className='topic'>
          <img src={path} alt="선인장-타임랩스" />

          <div className='time-labs'>
            <p>{ title }</p>
          </div>

        </div>
  )
}
