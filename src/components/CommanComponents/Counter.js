import React from 'react'
import CountUp from 'react-countup';

export const Counter = () => {
  return (
    <>
<div className="counter-area pt-100 pb-70">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-3 card-overlay">
        <div className="counter-item">
          <h3>
            <span className="odometer" data-count={10}><CountUp start={0} end={10} /> </span>
            <span className="target">+</span>
          </h3>
          <p>Years Of Experience</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 card-overlay">
        <div className="counter-item">
          <h3>
            <span className="odometer" data-count={100}><CountUp start={0} end={100} /> </span>
            <span className="target">+</span>
          </h3>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 card-overlay">
        <div className="counter-item">
          <h3>
            <span className="odometer" data-count={75}><CountUp start={0} end={75} /> </span>
            <span className="target">+</span>
          </h3>
          <p>Cr Investments</p>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3 card-overlay">
        <div className="counter-item">
          <h3>
            <span className="odometer" data-count={4}><CountUp start={0} end={4} /> </span>
            <span className="target">+</span>
          </h3>
          <p>Opened Location</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
