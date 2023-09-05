import React from 'react'
import { Header } from '../components/CommanComponents/Header'
import { Navbar } from '../components/CommanComponents/Navbar'
import { AboutCompany } from '../components/AboutSectionComonents/AboutCompany'
import { Counter } from '../components/CommanComponents/Counter'
import { FounderInfo } from '../components/AboutSectionComonents/FounderInfo'
import { Footer } from '../components/CommanComponents/Footer'
import { GoToTop } from '../components/CommanComponents/GoToTop'
import { HeaderForAbout } from '../components/AboutSectionComonents/HeaderForAbout'

export const AboutUS = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <HeaderForAbout/>
    <AboutCompany/>
    <Counter/>
    <FounderInfo/>
    <Footer/>
    <GoToTop/>
    </>
  )
}
