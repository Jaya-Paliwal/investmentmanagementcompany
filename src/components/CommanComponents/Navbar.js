import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    let url;
  return (
    <>
<div className="navbar-area sticky-top">
  <div className="mobile-nav">
    <a href="index.html" className="logo">
      <img src="%PUBLIC_URL%/assets/img/delta-logo.png" alt="Delta Logo" />
    </a>
  </div>
  <div className="main-nav">
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="index.html">
          <img src="assets/img/delta-logo.png" className="logo-one dltlogo" alt="Delta Logo" />
          <img src="assets/img/delta-logo.png" className="logo-two" alt="Delta Logo" />
        </a>
        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link dropdown-toggle active">Home </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <a href={url} className="nav-link dropdown-toggle">Services</a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <Link to="/investments_solution" className="nav-link">Intelligent Investment Solutions</Link>
                </li>
                <li className="nav-item">
                  <Link to="/delta_hedging_education" className="nav-link">Delta Hedging Education</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link dropdown-toggle">Testimonials</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="common-btn" to="/inquiry" style={{paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, marginTop: '-4px'}}>Inquiry
                <span style={{top: '222.938px', left: '383.094px'}} />
              </Link>
            </li>
          </ul>
          <div className="side-nav">
          </div>
        </div>
      </nav></div>
  </div>
</div>

</>
  )
}
