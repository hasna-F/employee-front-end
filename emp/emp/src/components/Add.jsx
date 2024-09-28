import { Button, Input, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", sal: "" })
  var navigate = useNavigate()
  
  const inputHandler = (e) => {
    setinput({ ...input,[e.target.name]: e.target.value })
    console.log(input)

  }
  
   const sb = () => {

     axios.post("http://localhost:3043/add",input)
       .then((res) => {
         alert(res.data.message)
         navigate()

       })
     
  }
  return (
    <div>
        <TextField
        variant="outlined" 
        label="Name"
        name="Name"
        value={input.Name}
        onChange={inputHandler}
        />
        <br /><br />
         <TextField 
        variant="outlined" 
        label="Age"
        name="Age"
        value={input.Age}
        onChange={inputHandler}
        />
        <br /><br />
         <TextField 
        variant="outlined" 
        label="Department"
        name="Dept"
        value={input.Dept}
        onChange={inputHandler}
        />
        <br /><br />
         <TextField 
        variant="outlined" 
        label="Salary"
        name="sal"
        value={input.sal}
        onChange={inputHandler}
        />
        <br /><br />
        <Button variant='contained'onClick={sb}>Submit</Button>
    </div>
  )
}

export default Add