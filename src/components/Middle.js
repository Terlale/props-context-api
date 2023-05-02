import React from 'react'
import { MainContext } from '../context/context'
import { useContext } from 'react'

const Middle = () => {

  const {db} = useContext(MainContext)

  return (
    <div style={{height:300, backgroundColor:'grey'}}>
      {db.map(item => (<div>
        <h1>{item.contactName}</h1>
      </div>))}
    </div>
  )
}

export default Middle