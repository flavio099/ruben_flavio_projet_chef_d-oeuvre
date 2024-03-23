import React from "react"
import Header from "./Header"
import HomeSection from "./HomeSection"
import ServiceSection from "./ServiceSection"
import AboutSection from "./AboutSection"
import GallerySection from "./GallerySection"
import PriceSection from "./PriceSection"
import ReviewSection from "./ReviewSection"
import ContactSection from "./ContactSection"
import Footer from "./FooterSection"
import ThemeToggler from "./ThemeToggler"
import './officiel.css'

function AccueilLushiEvent(){
    return(
    <>
  <Header></Header>
  <HomeSection></HomeSection>
  <ServiceSection></ServiceSection>
  <AboutSection></AboutSection>
  <GallerySection></GallerySection>
  <PriceSection></PriceSection>
  <ReviewSection></ReviewSection>
  <ContactSection></ContactSection>
  <Footer></Footer>
  <ThemeToggler></ThemeToggler>
    </> 
    )
}


export default AccueilLushiEvent