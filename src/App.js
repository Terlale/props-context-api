import React, { useState } from 'react'
import Headers from './components/Headers'

const App = () => {
  const [data,setData] = useState('')
  return (
    <div>
      <Headers data={data} setData={setData}/>
    </div>
  )
}

export default App