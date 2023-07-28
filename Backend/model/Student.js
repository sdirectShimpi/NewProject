const sequelize= require('../config/db')
const {Sequelize}=require('sequelize')

const Student= sequelize.define('StudentRecordshi',{
//     StudentId:{
//         type:Sequelize.INTEGER,
//         primaryKey:true,
//         allowNull:false,
//         autoIncrement: true,
// },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false

    },
    lastName:{
        type:Sequelize.STRING,
   allowNull:false
    },
    DOB:{
        type:Sequelize.DATE,
        allowNull:false
    },
    Gender:{
        type:Sequelize.STRING,
        allowNull:false

    },
    Department:{
        type:Sequelize.STRING,

    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    PhoneNumber:{
       
        type:Sequelize.STRING,
        allowNull:false
    },
    Address:{
        type:Sequelize.STRING

    },

})
module.exports=Student;