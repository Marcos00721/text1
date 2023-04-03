import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './component/Form';
import Login from './component/Login';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Form />}></Route>
        <Route path="/Form" index element={<Form />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
