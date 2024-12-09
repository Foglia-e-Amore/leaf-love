import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Menu from './Pages/Menu/Menu';
import Aboutus from './components/AboutUs/Aboutus';
import CarryOut from './Pages/CarryOut/CarryOut';

function App() {
  return (
      <div className="App">
        <Routes basename='/leaf-love'>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/Aboutus" element={ <Aboutus /> } />
          <Route path="/carryout" element={ <CarryOut /> } />
        </Routes>
      </div>
  );
}

export default App;
