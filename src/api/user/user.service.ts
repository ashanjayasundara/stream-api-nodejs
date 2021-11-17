import { dbConnectionPool } from "../../configs";

const userService ={
    create:(data,callback)=>{
      dbConnectionPool.query(`insert into registration(firstName,lastName,gender,email,mobile,password)
         values(?,?,?,?,?,?);`,{
             data.firstName,
             data.lastName,
             data.gender,
             data.email,
             data.mobile,
             data.password
         },(err,results,fields)=>{
             if(err){
               return  callback(err)
             }
             return callback(null,results,fields);
         }),
    },
}

export default  userService;