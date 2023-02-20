import './App.css';
import NavBarAirBus from './components/Navbar';
import Display from './components/Display';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './components/Search';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <NavBarAirBus />
      <Display />     
    </div>
  );
}

export default App;
