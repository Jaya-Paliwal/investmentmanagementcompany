import React from 'react'

export const FounderInfo = () => {
  return (
    <>
    <section className="founder-area section-overlay pt-100 pb-70">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="founder-content">
          <div className="section-title">
            <span className="sub-title">The Founder &amp; CEO</span>
            <h2>Mr. Vijendra Patil</h2>
            <p>Vijendra Patil, a visionary entrepreneur with a decade of experience in the stock market industry, 
              has been instrumental in reshaping the landscape of investment education and management. <br />
              As the founder of Delta Company, situated in the vibrant city of Surat, he has dedicated himself to providing both 
              theoretical and practical knowledge to investors and clients alike. <br />
              Patil's journey, from his early days in Rajkot to his current position as a prominent figure in the 
              stock market industry, exemplifies his passion and commitment to fostering financial literacy</p>
          </div>
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Our Mission</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Our Vision</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Our Goal</a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
              <ul>
                <li>It is a long established fact that a reader will be distracted</li>
                <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
              </ul>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
              <ul>
                <li>It is a long established fact that a reader will be distracted</li>
                <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
              </ul>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
              <ul>
                <li>It is a long established fact that a reader will be distracted</li>
                <li>Contrary to popular belief, Lorem Ipsum is not simply random text</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="founder-img">
          <img src="assets/img/team/vijendra-patil.jpg" alt="Founder" />
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
