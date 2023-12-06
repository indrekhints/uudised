import { HashRouter } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Uudis from './pages/Uudis';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Footer from './components/Footer';

const contentful = require('contentful')

export const client = contentful.createClient({
  space: '7ss2yf6qlicg',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'I3v986g8IDqhMGKdjGlwV75AyWhLw-psNHPq8rfE1sw'
})


function App() {


  /* client.getEntry('Kj1lrohYtJkCn1GhlEfwv')
    .then((entry) => console.log(entry))
    .catch(console.error)
  client.getAsset("4zpFKREVn2yEmbnRJ9SH1X")
    .then((asset) => console.log(asset.fields.file.url)) */


  return (

    <HashRouter hashType="hashbang">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="home/:UudisId" element={<Uudis />} />
      </Routes>
      <Footer />
    </HashRouter>

  );
}

export default App;
