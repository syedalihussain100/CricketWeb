import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
// images card1 carsuel
import OneImg from "./components/Home/rightone.jpg";
import TwoImg from "./components/Home/righttwo.jpg";
import ThreeImg from "./components/Home/rightthree.jpg";
// images card2 carsuel
import LeftOneImg from "./components/Home/lefttone.jpg";
import LeftTwoImg from "./components/Home/lefttwo.jpg";
import LeftThreeImg from "./components/Home/leftthree.jpg";
import Casino from "./components/Pages/Casino/Casino";
import SignUp from "./components/Pages/Signup/Signup";


function App() {
  const images = [
    OneImg,
    TwoImg,
    ThreeImg,
  ];

  const images1 = [
    LeftOneImg,
    LeftTwoImg,
    LeftThreeImg,
  ];



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home images={images} images1={images1} />} />
          <Route path="/casino" element={<Casino  />} />
          <Route path="/signup" element={<SignUp  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
