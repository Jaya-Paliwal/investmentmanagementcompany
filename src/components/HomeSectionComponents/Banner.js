import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './Banner.css';

export const Banner = () => {
    let url;
  return (
    <>
<div className="banner-area ">
  <div className="banner-slider owl-theme owl carous">
  <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
         autoplay ={true}>
    <div className="overlay-banner">
      <div className="banner-item banner-bg-one">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-content">
                <h1>Your Path to Financial Empowerment</h1>
                <a className="common-btn" href={url}>
                  Let's Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="overlay-banner">
      <div className="banner-item banner-bg-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-content">
                <h1>Risk Management With Excellence</h1>
                <a className="common-btn" href={url}>
                  Let's Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay-banner">
      <div className="banner-item banner-bg-three">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-content">
                <h1>No.1 Investment Company With Experience</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when an unknown printer</p>
                <a className="common-btn" href={url}>
                  Let's Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </OwlCarousel>
  </div>
</div>


    </>
  )
}
