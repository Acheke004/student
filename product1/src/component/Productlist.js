import React from 'react'
import { Link } from 'react-router-dom'

function Productlist(props) {

    const delete1=()=>{}
    const renderList=()=>{
        return props.Products.map((prod)=>{
        return <tr key={prod.pid}><td>{prod.pid}</td><td>{prod.pname}</td><td>{prod.pprice}</td>
        <td>
            <button type='button' className="btn" name="btn1" onClick={delete1}></button></td>
        <td>
            <button type='button' className='btn2' name="btm1"> edit</button>
        </td>
        {/* <td>
            <button type='button' className='btn3' name='btm2'></button>
        </td> */}        
        </tr>

    })
}
  return (
    <div>Productlist
    <table>
        <tr><th>Pid</th><th>pname</th><th>pprice</th></tr>
        {renderList()}
    </table>
    </div>
  )
}

export default Productlist