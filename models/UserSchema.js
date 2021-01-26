const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        required:true
    },
    location:{
        type:String,
        minlength:5,
        required:true
    }
})
module.exports=mongoose.model('users',UserSchema);