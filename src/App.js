import './App.css';
import Signup from './components/Signup';
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/sigup" element={<Signup />} />
      <Route path="/login" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export default App;
