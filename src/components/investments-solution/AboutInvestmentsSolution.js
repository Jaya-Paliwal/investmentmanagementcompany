import React from 'react'
import { HowToWork } from './HowToWork'

export const AboutInvestmentsSolution = () => {
  return (
    <>
  <div className="project-details-area pt-100">
    <div className="container">
      <div className="details-img">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="img-left">
              <img src="assets/img/projects/investment.jpg" alt="Details" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content-right">
              <h2>At <span>Delta</span> EduTech</h2>
              <p>we take your financial aspirations seriously. Our seasoned team of experts meticulously analyzes 
                the market trends and 
                leverages cutting-edge technologies to make informed 
                investment decisions on your behalf. </p>
              <p>
                We offer a range of investment options tailored to your risk tolerance and financial goals. 
              </p>
              <p>
                Whether you're a novice or an experienced investor, 
                we ensure your hard-earned money works diligently to create wealth while mitigating potential risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HowToWork/>
  </div>

    </>
  )
}
