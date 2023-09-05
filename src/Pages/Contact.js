import React from 'react'
import { Header } from '../components/CommanComponents/Header'
import { Navbar } from '../components/CommanComponents/Navbar'
import { ContactDetails } from '../components/ContactSectionComponents/ContactDetails'
import { Map } from '../components/ContactSectionComponents/Map'
import { Footer } from '../components/CommanComponents/Footer'
import { GoToTop } from '../components/CommanComponents/GoToTop'
import { ContactHeader } from '../components/ContactSectionComponents/ContactHeader'

export const Contact = () => {
  return (
    <>
     <Header/>
      <Navbar/>
      <ContactHeader/>
      <ContactDetails/>
      <Map/>
      <Footer/>
      <GoToTop/>
    </>
  )
}
