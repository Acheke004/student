import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function User() {
const navigate = useNavigate();
const [user,setUser]=useState([]);
const url = "http://localhost:4000";
const handlechange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setUser({...user,[name]:value});

}
const Resetdata=()=>{
    navigate("/");

}
    const Submitdata=()=>{
        // console.log(student)
        console.log((user))
        return (
            axios.post(url + "/login",user).then((result)=>{
                console.log("hi");
                if(result){
                    console.log("ok")
                    navigate("/");
                }
                // else {
                //     return <Navigate replace to="/" />;
                //     console.log("ok");
                // }
                // setStudent(...student,[{rollno:'',name:"",course:"",doa:"",marks:"",phoneno:""}])
            })
        )

    }

  return (
    <div>
        <h1>Login</h1>
        <form>
            <table>
            <tr>
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
                <td><button type='button' onClick={Submitdata}>Submit</button></td>
                <td><button type='button' onClick={Resetdata}>Cancel</button></td>
            </tr>
            </table>
        </form>
    </div>
  )
}

export default User