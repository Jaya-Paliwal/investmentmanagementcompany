import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from './App';
import { Home } from './Pages/Home';
import { AboutUS } from './Pages/AboutUs';
import { InvestmentsSolution } from './Pages/InvestmentsSolution';
import { DeltaHedgingEducation } from './Pages/DeltaHedgingEducation';
import { Contact } from './Pages/Contact';
import { Inquiry } from './Pages/Inquiry';

export const AppRouter = () => {
  return (
    <>
        <Routes>
                <Route path=' ' element={<App/>}></Route>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< AboutUS />}></Route>
                <Route exact path='/investments_solution' element={< InvestmentsSolution />}></Route>
                <Route exact path='/delta_hedging_education' element={< DeltaHedgingEducation />}></Route>
                <Route exact path='/contact' element={< Contact />}></Route>
                <Route exact path='/inquiry' element={< Inquiry />}></Route>
                
        </Routes>

    </>
  )
}

