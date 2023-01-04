const express=require("express")
const router=express.Router()
const db=require("../db")


router.post('/adddata',(req,res)=>{
    const{rollno,name,course,doa,mark,phoneno}=req.body;
    const query1=`insert into student values ('${rollno}','${name}','${course}','${doa}','${mark}','${phoneno}')`;
    db.query(query1,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

router.post('/login',(req,res)=>{
    const{prn,pwd}=req.body;
    const q1=`select * from user2 where prn="${prn}" and pwd="${pwd}"`;
    db.query(q1,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

// router.post('/delete',(req,res)=>{
//     console.log("data")
//     console.log(req.body.prn+"  :::get /")
//     const q1=`delete from user2 where prn != ${req.body.prn}`
// // const q1=`select * from user2 where prn != ${req.body.prn}`
// db.query(q1,(err,rslt)=>{
//     console.log(rslt)
//     res.send(rslt)});
// })
    

// router.post('/signup',(req,res)=>{
//     console.log(req.body.pwd+"kljbkjjkl")
// const{pwd,cpwd}=req.body

//     const query1=`insert into user2(pwd,cpwd) values ('${pwd}','${cpwd}')`
//     db.query(query1,(err,result)=>{
//         if(err){
//             console.log("error"+err)
//         }else{res.send(result)}
//     })
// })
// router.post('/signin',(req,res)=>{
//     const{email,pass}=req.body
//     const query1=`select * from user2 where email='${email}' and pass='${pass}'`
//     db.query(query1,(err,result)=>{
//         if(err){
//             console.log("error"+err)
//             res.send(err)
//         }else{res.send(result)}
//     })
// })
// console.log("okuser2")
module.exports=router

