import axios from 'axios'
import { API } from 'config'
import  jwt  from 'jsonwebtoken'
import { useRouter } from 'next/router'
import React, {  useEffect, useState } from 'react'

export default function AcctivateAccount() {
const route =useRouter()

const {query} =route

const [state,setState] =useState({
    name:'',
    token:'',
    buttonText:'Activate Account',
    success:'',
    error:''
})

// const  {name,token,buttonText,success,errq} =state
let token =query.id 
useEffect(()=>{
    
    
    console.log('mount',token);
    if (token) {
       
        
        const {name} =jwt.decode(token)
        console.log(name);
        setState({...state,name,token})
    }
},[token])

const handleSubmit=async()=>{
setState({...state})
   try{
 const response =await axios.post(`${API}/register/activate`,{token})
 
   }catch(err){
console.log(err);
   } 
}




  return (
    <div style={{margin:45}}><p>{JSON.stringify(state)}</p>
    <p>{JSON.stringify(token)}</p>
    
    <button  onClick={handleSubmit}>submit</button>
    </div>
  )
}
