import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Student from './component/Student';
import User from './component/User';
import Home from './component/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/Student" element={<Student/>}></Route>
          <Route path="/User" element={<User/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
