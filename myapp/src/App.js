import Login from './pages/Login';
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';

function App() {
  return (
    <>
    <BrowserRouter>
    {/* {
      paramName===("login"||"register")? <Nav2 show={show} />:""
      
    } */}


      <Routes>
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/register" element={<Register/>} />
   
         


        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
