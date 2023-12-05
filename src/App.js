import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Uudis from './pages/Uudis';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  /* errors.... Cannot read properties of null(reading 'useContext').... */
  /* Cannot read properties of null(reading 'useRef') */
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="home/:UudisId" element={<Uudis />} />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
