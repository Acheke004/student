import React, { useEffect, useState } from 'react'
import Server1 from './Server1';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Signup() {

    const [user1,setUser]=useState([]);
const history=useHistory();

const url="http://localhost:4000";

const submitme=()=>{

    return (axios.post(url+"/signup",user1).then((result)=>{
        if(result){
            console.log(result)
        }

        setUser(...user1,result.data)
        
        history.push('/')
    }));
}



// const Deletestd=(obj)=>{
//     console.log(obj)
//     return(
//         (axios.post(url+'/delete',obj).then((err,result)=>{
//             console.log(result)
//             const data=result.data
//             console.log(data)
//             if(result){
//                 setUser(data)
//             }else{
//                 console.log(err+"/not working")
//             }
            
//         })
//     ))
// }


// useEffect(()=>{
    
// })

//   setuser1(user2).then(())



    // Server1.setuser1(user).then((err,rslt)=>{
    //     if(err){
    //         console.log("no data found"+err);

    //     }
    //     else{
    //         console.log("ok")
    //         history.push('/signup');
    //     }

    // });


const handlechange=(event)=>{
    console.log("ok11")
    const name=event.target.name;
    const value=event.target.value;
setUser({...user1,[name]:value})

}
const data1=()=>{
    console.log(user1)
}

const getdata=()=>{

    return(axios.get(url+'/data').then((result)=>{
        if(result){
           var data=result.data
           console.log(data)
           setUser(data)
        }
        
    }))
    
}



  return (
    <div>
        <div>
            <h1>
            signup
            </h1>
            <form>
                <table><tr>
                    <td>
                        Prn no.:
                    </td>
                    <td>
                        <input type="Number" name="prn" id="prn" onChange={handlechange} />
                    </td>
                </tr>
                <tr>
                    <td>
                        pwd:
                    </td>
                    <td>
                        <input type="password" name="pwd" id="pwd`" onChange={handlechange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                       confirm pwd:
                    </td>
                    <td>
                        <input type="confirmpwd" name="cpwd" id="cpwd`" onChange={handlechange}/>
                    </td>
                </tr>
                    
                </table>
               
                <button type="button" name="usr" id="usr" onClick={submitme} >Submit</button>
            </form>
            {/* <div>
                <Server1 user1={user}  setuser2={setuser1}></Server1>
            </div> */}
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>prn</th>
                            <th>pass</th>
                            <th>cpass</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           
                            user1.map((s)=>{
                                return(
                                    <tr><td>{s.prn}</td><td>{s.pwd}</td><td>{s.cpwd}</td>
                                    {/* <td><button type='button'  onClick={()=>{
                                        Deletestd(s)
                                    }}>Delete</button></td> */}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <button type='button' onClick={getdata}>data</button>
            <button type='button' onClick={data1}>data1</button>
        </div>
        
       
    </div>
  )
}

export default Signup