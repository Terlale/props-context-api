import React from 'react'
import axios from "axios"

const Headers = ({data,setData}) => {
    axios(`https://northwind.vercel.app/api/suppliers`).then(res=>{
        console.log(res.data)
    })
    console.log(data)
  return (
    <div>
        
      
    </div>
  )
}

export default Headers