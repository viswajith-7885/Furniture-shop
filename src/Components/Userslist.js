import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userslist() {
    const[user,setuser]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3031/users")
        .then(res=>setuser(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>Name</tr>
                <tr>Age</tr>
             
            </thead>
            {user.map((e)=>(
                <tbody>
                <tr>{e.name}</tr>
                <tr>{e.age}</tr>
            </tbody>
            ))}
         
        </table>
    </div>
  )
}

export default Userslist