const express = require('express')
const app = express()
const User=require("./models/UserSchema")
const port = process.env.PORT||3000
const db=require("./db");
const path=require("path");
const { url } = require('inspector');
const static_path=path.join(__dirname,'./public');
const temppath=path.join(__dirname,'./templates/views');
const bodyParser=require("body-parser");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",temppath)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.render('index.hbs');
})


app.get('/search', (req, res,next) => {
    var query=req.query.search;
    User.find({
            $or:[
                {name:{$regex:query,$options:'$i'}},
                {location:{$regex:query,$options:'$i'}}
            ]
        },function(err,data){
            if(err)
            {
                res.send(err)
            }
            else
            {
                res.send(data);
            }
        });
});

app.post("/",(req,res)=>{
    var user=new User({
        name:req.body.name,
        location:req.body.location
    });
    // console.log(user.name);
    user.save();
    res.render('index.hbs');
});

// app.post("/search",(req,res)=>{

//     // User.find({name:'req.body.search'});
// });
app.listen(port, () => console.log(`Example app listening on port port!`));