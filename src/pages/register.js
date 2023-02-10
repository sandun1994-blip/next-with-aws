import axios from 'axios'
import { API } from 'config'
import React, { useState } from 'react'

export default function Register() {

const [data,setData]=useState({
    name:'',username:'',email:'',password:''
})

const handleChange=(e)=>{
setData(pre=>({...pre,[e.target.name]:e.target.value}))
}

const submit=async()=>{
await axios.post(`${API}/register`,data).then(
    res=>{
        console.log(res);
    }
).catch(
    err=>{
        console.log(err);
    }
)
}
  return (
    <>
    <div>
    <div><input name='name' onChange={handleChange} placeholder='name' style={{margin:'10px'}}/></div>
    <div><input name='username' onChange={handleChange} placeholder='username' style={{margin:'10px'}}/></div>
    <div><input name='email' onChange={handleChange} placeholder='email' style={{margin:'10px'}}/></div>
    <div><input name='password' onChange={handleChange} placeholder='password' style={{margin:'10px'}}/></div>
    <button style={{margin:'10px'}} onClick={submit}>Submit</button>
    </div>
    </>
    
  )
}
