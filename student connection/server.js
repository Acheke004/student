const express=require("express")
const app1=express();
const mysql=require("mysql");
const cors= require('cors')
const routeuser=require('./routes/user')

const pool=mysql.createPool({
    host:'localhost',
    user:'ashu',
    database:'spotify',
    password:'ashu123'
})
app1.use(express.json())
app1.use(cors('*')) 

app1.use('/',routeuser)
// app1.get("/",(req,res)=>{
    
//     res.send("ashu")
// })
// app1.post('/signup',(req,res)=>{
//     console.log(req.body.pwd+"kljbkjjkl")
// const{pwd,cpwd}=req.body

//     const query1=`insert into user2(pwd,cpwd) values ('${pwd}','${cpwd}')`
//     pool.query(query1,(err,result)=>{
//         if(err){
//             console.log("error"+err)
//         }else{res.send(result)}
//     })
// })

app1.listen(4000,function(err){
    console.log("ok")
    if(err){
        console.log(err+"not conne")
    }
})




