import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css';
import { useParams }  from 'react-router-dom'

function Student() {

    const { id } = useParams();
    const[create,setCreate]=useState({
        firstName:"",
        lastName:"",
        DOB:"",
        Gender:"",
        Department:"",
        email:"",
        PhoneNumber:"",
        Address:""
    })
    const handelCreate =(e)=>{
        setCreate({...create,[e.target.name]:e.target.value})
    }
    async function handleLogin(e) {
        e.preventDefault()
       const res = await axios.post('http://localhost:3005/createStudent', create)
        console.log(res)
        alert(res.data.msg);
    }

  

    useEffect(()=>{
      if(id != undefined){
        async function FetchRecord(){
          const res = await axios.get(`http://localhost:3005/find?id=${id}`)
          console.log("This is res",res)
          setCreate(res.data.student)
        }
        FetchRecord();
      }

    },[id])

    console.log("this is my data", create)
    return (
    <>

   <form className='form' onSubmit={handleLogin}>
 
    <label>firstName</label>
    <br/>
    <input type="text" onChange={handelCreate} name='firstName'></input>
    <br/>
    <label>lastName</label>
    <br/>
    <input type="text" onChange={handelCreate} name="lastName"></input>
    <br/>
    <label>DOB</label>
    <br></br>
    <input type="date" onChange={handelCreate} name="DOB"></input>
    <br/>
    <label>Gender</label>
    <br></br>
    <input type="radio" id="html" name="Gender" value="HTML"  onChange={handelCreate} />
  <label for="html">Male</label><br/>
  <input type="radio" id="css" name="fav_language" value="CSS"/>
  <label for="css">female</label><br/>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
  <label for="javascript">others</label>
<br/>
<label>Department</label>
<br/>
<select name="Department" id="cars" onChange={handelCreate}> 
<option value="volvo">select option</option>
<option value="Computer Science">Computer Science</option>
  <option value="Management">Management</option>
  <option value="Nursing">Nursing</option>
  <option value="Agriculture">Agriculture</option>
</select>
<br/>

<label>email</label>
<br/>
<input type="text" name='email' onChange={handelCreate}></input>
<br/>
<label>PhoneNumber</label>
<br/>
<input type="text" name='PhoneNumber' onChange={handelCreate}></input>
<br></br>
<label>Address</label>
<br/>
<input type="text" name='Address' onChange={handelCreate}></input>
<br></br>
<button type="submit">SUBMIT</button>

</form>

    </>
  )
}
export default Student