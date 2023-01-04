import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useNavigation } from 'react-router-dom';


function Student() {
    const [student,setStudent]=useState({rollno:'',name:"",course:"",doa:"",marks:"",phoneno:""});
    const url = "http://localhost:4000";
    const navigate = useNavigate();
    const hist=()=>{
        navigate("/",{state:{student}})
    }
   const Senddata=() => {
        if(student!=""){
            hist();
        }
   
    }
    
    const Submitdata=()=>{
        // console.log(student)
        console.log((student));
        return (
            axios.post(url + "/adddata",student).then((result)=>{
                console.log("hi");
                if(result){
                    console.log(result.data);
                }
                setStudent({rollno:'',name:"",course:"",doa:"",marks:"",phoneno:""})
            })
        )


    }


    
    const Resetdata=()=>{
        navigate("/");

    }

    const handlechange=(ev)=>{
        const name=ev.target.name;
        const value =ev.target.value;

        setStudent({...student,[name]:value});
    }
    // const sedd=()=>{

    // }
  return (
    <div>Student




        <form>
            <table>
                <tr>
                    <td>
                        Roll NO :
                    </td>
                    <td>
                    <input type="number" name='rollno' id='rn'  value={student.rollno} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        NAME :
                    </td>
                    <td>
                    <input type="text" name='name' id='name' value={student.name} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        COURSE:
                    </td>
                    <td>
                    <input type="Text" name='course' id='course'  value={student.course} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        DATE OF ADMISSION :
                    </td>
                    <td>
                    <input type="date" name='doa' id='doa' value={student.doa} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        MARKS :
                    </td>
                    <td>
                    <input type="number" name='mark' id='mk' value={student.mark} onChange={handlechange}></input>
                    </td>
                </tr>
                <tr>
                    <td>
                        PHONE NO :
                    </td>
                    <td>
                    <input type="number" name='phoneno' id='pn' onChange={handlechange}></input>
                    </td>
                </tr>
            
            <tr>
                <td><button type='button' onClick={Submitdata}>Submit</button></td>
                <td><button type='button' onClick={Resetdata}>Cancel</button></td>
            </tr>
            
            </table>
        </form>
        <button type='button' onClick={Senddata}>Senddata</button>

    </div>
  )
}

export default Student