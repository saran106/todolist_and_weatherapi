import logo from './logo.svg';
import './App.css';
import Weatherapitest from './weatherapitest';
import Todolistapp from './Todolistapp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
       
    <Route path="/weatherapitest" element={<Weatherapitest/>} />
    <Route path="/Todolistapp" element={<Todolistapp/>}/>
    
  </Routes>
  );
}

export default App;
