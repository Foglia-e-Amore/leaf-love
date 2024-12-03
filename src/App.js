import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes basename='/leaf-love'>
          <Route index element={ <Homepage /> } />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
