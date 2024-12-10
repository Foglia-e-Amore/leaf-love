import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import Menu from './Pages/Menu/Menu';
import Aboutus from './components/AboutUs/Aboutus';

function App() {
  return (
      <div className="App">
        <Routes basename='/leaf-love'>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/menu" element={ <Menu /> } />
          <Route path="/Aboutus" element={ <Aboutus /> } />
        </Routes>
      </div>
  );
}

export default App;
