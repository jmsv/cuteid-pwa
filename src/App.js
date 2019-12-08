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

      <div className="ids">
        {ids.map(id => (
          <div className="id" key={id}>
            {id}
          </div>
        ))}
      </div>

      <div className="gh-link">
        <a href="https://github.com/jmsv/cuteid-pwa">cuteid GitHub</a>
      </div>
    </div>
  )
}
