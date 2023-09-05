import React from 'react'

export const Service = () => {
  return (
    <>
<section className="services-area pt-100 pb-70">
  <div className="container">
    <div className="section-title">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <span className="sub-title">Our Services</span>
          <h2>The <span>Services</span> That We Provide For Our Ultimate Clients</h2>
        </div>
        <div className="col-lg-6">
          <p>
          </p></div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-6">
        <div className="services-item card-overlay active">
          <i className="flaticon-marketing-strategy" />
          <h3>
            <a href="investments-solution.html">Intelligent Investment Solutions</a>
          </h3>
          <p>Ready to take control of your financial future? </p>
          <a className="services-btn" href="investments-solution.html">Read More</a>
        </div>
      </div>
      <div className="col-sm-6 col-lg-6">
        <div className="services-item card-overlay">
          <i className="flaticon-dollars-money-bag-with-a-clock" />
          <h3>
            <a href="delta-hedging-education.html">Delta Hedging Education</a>
          </h3>
          <p>Understanding the dynamics of financial markets is the cornerstone of successful investing. </p>
          <a className="services-btn" href="delta-hedging-education.html">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
