const express=require('express')
const rout=express.Router()
const { createStudent,getRecord ,deleteRecord,findstudent,updateProduct} = require('../Controller/studentController')

console.log("route page")
rout.post('/createStudent',createStudent)
 rout.get('/getRecord',getRecord)
 rout.delete('/deleteRecord/:id',deleteRecord)
 rout.get('/find',findstudent)
  rout.post('/update',updateStudent)

module.exports=rout