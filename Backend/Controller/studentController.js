const Student=require('../model/Student')
exports.createStudent= async (req,res)=>{
    console.log("controller", req.body)
    const{firstName,lastName,DOB,Gender,Department,email,PhoneNumber,Address}=req.body
    console.log("record",firstName)
    try{
    const creatRecord= await Student.create({
        firstName:firstName,
        lastName:lastName,
        DOB:DOB,
        Gender:Gender,
        Department:Department,
        email:email,
        PhoneNumber:PhoneNumber,
        Address:Address
    })
    res.json({msg:"user created succesfuly",creatRecord})
}
catch(err){
    console.log(err)
}
}
// exports.getRecord=async(req,res)=>
// {
//     console.log('request')
//     const {id}=req.query
//     console.log(id)
//     try{
//    const student=await Student.findOne(
//     {where:{id:id}})
//    return res.status(200).json({success:true,student:student})
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }
// exports.getRecord=async(req,res)=>
//  {
//     try{
//     const student=await Student.findAll()
//     console.log(student)
//     }
   
//     catch(err){
//         console.log(err)
//     }

//  }
exports.getRecord = async (req, res) => {
    try {
      const students = await Student.findAll();
      res.json(students); // Send the response in JSON format
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
 exports.deleteRecord=async(req,res)=>{
    try{
        const{id} = req.params
        const record=await Student.destroy({
             where:{id:id}
           })
        res.status(200).json({msg:"stutdent record delete nsuccesfuly",record:record})
    }
    catch(err){
        console.log(err)
    }
 }
 exports.findstudent=async(req,res)=>
{
   
    const {id}=req.query
    console.log(id)
    try{
   const student=await Student.findOne({where:{id:id}})
   return res.status(200).json({success:true,student:student})
    }
    catch(error)
    {
        console.log(error)
    }
}
exports.updateStudent = async(req,res) =>{
         const { id } = req.query;
         const{firstName,lastName,DOB,Gender,Department,email,PhoneNumber,Address}=req.body
      try{
      const viweData = await Student.update(
         { firstName, lastName, DOB,Gender,Department,email,PhoneNumber,Address},
         { where: { id: { [Op.like]: id } } }
           );
         }
         catch(err){
          console.log(err)
          if(viweData){
                console.log("Update succesfuly")
    
          }
      else{
               console.log("Product are not Update")
      }
       }
     }
