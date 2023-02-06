
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/navigation/Navbar'
import { planetData, GlobalPlanetContext } from './context/GlobalContext';
import RouterWrappper from './router/Router';

const App = () => {

  // const [planetData, setPlanetData] = useState([])
  useEffect(() => {
    //set planet data as c
  }, [])
  return (
    <GlobalPlanetContext.Provider value={planetData}>
      <Router>
        <Navbar />
        <RouterWrappper />
      </Router>
    </GlobalPlanetContext.Provider>
  )
}

export default App;
