
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/searchweb",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // this function return promises
}).then(()=>{
console.log("Connection success")
}).catch((e)=>{
    console.log(e);
});
