import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Menu from './Pages/Menu/Menu';
import CarryOut from './Pages/CarryOut/CarryOut';
import Play from './Pages/PlayGround/Play';
import AboutUsPage from './Pages/AboutUs/AboutusPage';

function App() {
  return (
      <div className="App">
        <Routes basename='/leaf-love'>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/Aboutus" element={ <AboutUsPage /> } />
          <Route path="/carryout" element={ <CarryOut /> } />
          <Route path='/playground' element={ <Play /> } />
        </Routes>
      </div>
  );
}

export default App;
