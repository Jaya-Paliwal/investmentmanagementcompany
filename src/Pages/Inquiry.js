import React from 'react'
import { Header } from '../components/CommanComponents/Header'
import { Navbar } from '../components/CommanComponents/Navbar'
import { InquireHeader } from '../components/Inquiry/InquireHeader'
import { Footer } from '../components/CommanComponents/Footer'
import { GoToTop } from '../components/CommanComponents/GoToTop'
import { ContactForm } from '../components/Inquiry/ContactForm'

export const Inquiry = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <InquireHeader/>
    <ContactForm/>
    <Footer/>
    <GoToTop/>

    </>
  )
}
