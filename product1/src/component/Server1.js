import React from 'react'
import axios from 'axios'
import Signup from './Signup';

const Server1=(props)=>{



 const url="http://localhost:3000";

 const setuser3=()=>{

 
props.setuser2=()=>{
  return (axios.post(url+"/signup",props.user1)

  )

}
 }

}

export default Server1