import React from 'react'

export const About = () => {
    let url;
  return (
    <>
<section className="about-area section-overlay pt-100 pb-70">
  <div className="container-fluid">
    <div className="row align-items-center">
      {/*COL-7*/}
      <div className="col-lg-7">
        <div className="about-content">
          <div className="section-title">
            <span className="sub-title">About</span>
            <h2>Mastering Risk with Delta Hedging <span>at Delta EduTech</span></h2>
            <p>Delta EduTech is a leading financial services and education 
              company headquartered in the vibrant city of Surat. </p>
          </div>
          <p className="about-p">We specialize in two core areas: 
            intelligent investment strategies and comprehensive education on delta 
            hedging techniques. Our founder and director, Mr. Vijendra Patil, brings over a decade of invaluable 
            expertise to the table, having successfully navigated the intricate landscape of financial markets.</p>
          <div className="row">
            <div className="col-sm-6 col-lg-6">
              <ul>
                <li>
                  <i className="flaticon-medal-of-award" />
                </li>
                <li>
                  <h3>10+ Years Experience</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-6">
              <ul>
                <li>
                  <i className="flaticon-star" />
                </li>
                <li>
                  <h3>Growing Success</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-6">
              <ul>
                <li>
                  <i className="flaticon-insurance" />
                </li>
                <li>
                  <h3>100% Trusted Company</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-6">
              <ul>
                <li>
                  <i className="flaticon-dollars-money-bag-with-a-clock" />
                </li>
                <li>
                  <h3>Finance Management</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
                </li>
              </ul>
            </div>
          </div>
          <a className="common-btn" href={url}>Explore About Us
            <span />
          </a>
        </div>
      </div>
      {/*COL-5*/}
      <div className="col-lg-5">
        <div className="about-img">
          <div className="row align-items-end">
            <div className="col-sm-6 col-lg-6">
              <img src="assets/img/about/about1.jpg" alt="About" />
            </div>
            <div className="col-sm-6 col-lg-6">
              <img src="assets/img/about/about2.jpg" alt="About" />
            </div>
            <div className="col-lg-12">
              <img src="assets/img/about/about3.jpg" alt="About" />
            </div>
          </div>
          <div className="years">
            <h3>10+ <br /> <span>Years</span></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
