import React from 'react'

export const Team = () => {
  return (
    <>
<section className="team-area ptb-100">
  <div className="container">
    <div className="section-title">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <span className="sub-title">Testimonials</span>
          <h2>What our <span>Client</span> says</h2>
        </div>
        <div className="col-lg-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero facilis 
            consequatur deleniti, ipsa provident? Culpa tenetur incidunt reprehenderit qui a 
            voluptas perferendis officiis
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <div className="team-item">
          <div className="top card-overlay">
            {/* <img src="assets/img/team/team1.jpg" alt="Team"> */}
            <video className="vdcls" width={306} height={380} controls>
              <source src="assets/video/Delta client review 1.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="team-item">
          <div className="top card-overlay">
            {/* <img src="assets/img/team/team1.jpg" alt="Team"> */}
            <video width={306} height={370} controls>
              <source src="assets/video/Delta client review 2.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="team-item">
          <div className="top card-overlay">
            {/* <img src="assets/img/team/team1.jpg" alt="Team"> */}
            <video width={306} height={370} controls>
              <source src="assets/video/Delta client review 3.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="team-item">
          <div className="top card-overlay">
            {/* <img src="assets/img/team/team1.jpg" alt="Team"> */}
            <video width={306} height={370} controls>
              <source src="assets/video/Delta client review 4.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
      <a className="common-btn" href="team.html">
        View More
        <span />
      </a>
    </div>
  </div>
</section>

    </>
  )
}
