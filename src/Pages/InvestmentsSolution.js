import React from 'react'
import { Header } from '../components/CommanComponents/Header'
import { Navbar } from '../components/CommanComponents/Navbar'
import { AboutInvestmentsSolution } from '../components/investments-solution/AboutInvestmentsSolution'
import { Footer } from '../components/CommanComponents/Footer'
import { GoToTop } from '../components/CommanComponents/GoToTop'
import { HeaderInvestmentsSolution } from '../components/investments-solution/HeaderInvestmentsSolution'


export const InvestmentsSolution = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <HeaderInvestmentsSolution/>
    <AboutInvestmentsSolution/>
    <Footer/>
    <GoToTop/>
    </>
  )
}
