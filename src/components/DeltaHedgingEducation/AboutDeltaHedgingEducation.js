import React from 'react'
import { Overview } from './Overview'

export const AboutDeltaHedgingEducation = () => {
  return (
    <>
   <div className="project-details-area pt-100">
  <div className="container">
    <div className="details-img">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="img-left">
            <img src="assets/img/projects/delta-hedging.jpeg" alt="Details" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-right">
            <h2>At <span>Delta</span> EduTech</h2>
            <p>Understanding the dynamics of financial markets is the cornerstone of successful investing. 
              Our comprehensive delta hedging education program is designed to empower individuals with the knowledge 
              and skills required to navigate the complexities of risk management.</p>
            <p>
              we recognize that delta hedging can seem complex at first glance. However, 
              our program breaks down this technique into manageable components,
              making it accessible to individuals of varying levels of financial expertise.
            </p>
            <p>
              Mr. Vijendra Patil, with his extensive experience, has personally educated and empowered more than 1200 individuals, 
              equipping them with the tools to make informed decisions and protect their investments against market fluctuations. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <Overview/>
  </div>
</div>

    </>
  )
}
