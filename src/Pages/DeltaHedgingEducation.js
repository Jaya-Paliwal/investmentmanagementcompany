import React from 'react'
import { Header } from '../components/CommanComponents/Header'
import { AboutDeltaHedgingEducation } from '../components/DeltaHedgingEducation/AboutDeltaHedgingEducation'
import { Navbar } from '../components/CommanComponents/Navbar'
import { HeaderDeltaHedgingEducation } from '../components/DeltaHedgingEducation/HeaderDeltaHedgingEducation'
import { GoToTop } from '../components/CommanComponents/GoToTop'
import { Footer } from '../components/CommanComponents/Footer'

export const DeltaHedgingEducation = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <HeaderDeltaHedgingEducation/>
    <AboutDeltaHedgingEducation/>
    <Footer/>
    <GoToTop/>
    
    </>
  )
}
