import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Productlist from './component/Productlist';
import Home from './component/Home';
import Signup from './component/Signup';
import Student from './component/Student';
import Navbar from './component/Navbar';


function App() {

let [parr, setparr] = useState([{pid: 1,pname:"phone",pprice:9000},{pid: 2,pname:"tab",pprice:3000},{pid:3,pname:"alexa",pprice:4000}])
  return (

    <div className="App">
     
      <BrowserRouter>
      <Navbar></Navbar>
      {/* <Link to='/home'>home</Link>
      <Link to='/signup'>signup</Link> */}
        <Switch>
          {/* <Route  path='/' exact render={(props)=>(<Productlist {...props}  Products={parr}></Productlist>)} >
          </Route>
          <Route  path='/list' exact render={(props)=>(<Productlist {...props}  Products={parr}></Productlist>)} >
          </Route> */}
          <Route path='/home' component={Home}></Route>
          <Route path='/student' component={Student}></Route>
          <Route path='/signup' component={Signup}></Route>
        </Switch>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
