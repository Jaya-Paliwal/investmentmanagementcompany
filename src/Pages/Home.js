import React from 'react'
import { About } from '../components/HomeSectionComponents/About';
import { Counter } from '../components/CommanComponents/Counter';
import { Footer } from '../components/CommanComponents/Footer';
import { GoToTop } from '../components/CommanComponents/GoToTop';
import { Header } from '../components/CommanComponents/Header';
import { Navbar } from '../components/CommanComponents/Navbar';
import { Service } from '../components/HomeSectionComponents/Service';
import { Team } from '../components/HomeSectionComponents/Team';
import { Banner } from '../components/HomeSectionComponents/Banner';

export const Home = () => {
  return (
    <>
      <Header/>
      <Navbar/>
     <Banner/>
      <About/>
      <Service/>
      <Counter/>
      <Team/>
      <Footer/>
      <GoToTop/>
    </>
  )
}
