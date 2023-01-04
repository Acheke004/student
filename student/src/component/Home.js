import React ,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Student from './Student';

function Home() {
  const[stddata,setstddata]=useState([]);
  const[flag,setflag]=useState(false);
  // const senddata=(student)=>{
  //   setstddata({...stddata,student})
  // }
  const state=useLocation().state;
  const showdata=() => {
    stddata.push(state.student)
   
    
    setflag(true);
    
    console.log(flag)
  }
  const renderdata=()=>{

    console.log(stddata[0])
    return stddata.map((s) =>{
      return(
          <tr>
            <td>{s.rollno}</td>
            <td>{s.name}</td>
            <td>{s.course}</td>
            <td>{s.doa}</td>
            <td>{s.mark}</td>
            <td>{s.phoneno}</td>
          </tr>
      )
        
      }
    )
    
  }
  return (
    <div>
        <h1>hello danny</h1>
        <table>
          {flag?
          renderdata():""}
          </table>
            
        <button type='button' onClick={showdata} >show</button>
    </div>
  )
}

export default Home