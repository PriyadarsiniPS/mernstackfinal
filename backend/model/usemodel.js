const mongoose=require('mongoose');
const user=mongoose.Schema({
    name:String,
   email:String, 
    location:String,
    salary:Number,
    designation:String,
    password:String
})
const data=mongoose.model('employee',user);
module.exports=data