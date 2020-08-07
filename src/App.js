import React from 'react';
import './App.css';
import Header from './js/components/Header/Header'
import Statistics from './js/components/Statistics/Statistics'
import Symptoms from './js/components/Symptoms/Symptoms'
import FAQ from './js/components/FAQ/FAQ'
import Footer from './js/components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Header /> 
        <Statistics /> 
        <Symptoms />
        <FAQ />
        <Footer /> 
    </div>
  );
}

export default App;
