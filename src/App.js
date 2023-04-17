import './App.css';
import React from 'react'
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import Trending from './components/Trending.jsx/Trending';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <>
    <Header />
    <Slider />
    <Trending />
    <Footer />
    </>
  )
}

export default App;
