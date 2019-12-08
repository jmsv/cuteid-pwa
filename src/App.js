import React, { useState, useEffect } from 'react'
import icon from './cuteid-icon.svg'

import { generate as cuteid } from 'cuteid'

import './App.scss'

export default () => {
  const [ids, setIds] = useState([])

  useEffect(() => newIds(), [])
  const newIds = () => setIds(new Array(5).fill().map(() => cuteid()))

  return (
    <div className="container">
      <header>
        <img src={icon} className="icon" alt="icon" />
        <button onClick={newIds}>generate new ids</button>
      </header>

      {ids.map(id => (
        <div className="an-id" key={id}>
          {id}
        </div>
      ))}
    </div>
  )
}
