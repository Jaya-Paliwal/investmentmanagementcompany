import React from 'react'

export const Footer = () => {
    let url;
  return (
    <>
<footer className="footer-area pt-100">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <div className="footer-item">
          <div className="footer-logo">
            <a className="footer-inva" href="index.html">
              <img src="assets/img/delta-white-logo.png" className="dltlogo" alt="Delta Logo" />
            </a>
            <p>Delta EduTech is a leading financial services and education company 
              headquartered in the vibrant city of Surat. </p>
            <ul>
              <li>
                <a href={url} target="_blank"rel="noreferrer">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href={url} target="_blank" rel="noreferrer">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href={url} target="_blank" rel="noreferrer">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
              <li>
                <a href={url} target="_blank" rel="noreferrer">
                  <i className="bx bxl-instagram" />
                </a>
              </li>
              <li>
                <a href={url} target="_blank" rel="noreferrer">
                  <i className="bx bxl-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="footer-item">
          <div className="footer-link">
            <h3>Important Links</h3>
            <ul>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="inquiry.html">Inquiry</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="investments-solution.html">Intelligent Investment Solutions</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="delta-hedging-education.html">Delta Hedging Education</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
                <a href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="footer-item">
          <div className="footer-hours">
            <h3>Open Hours</h3>
            <ul>
              <li>Monday <span>8:00 - 21:00</span></li>
              <li>Tuesday <span>8:00 - 21:00</span></li>
              <li>Wednesday <span>8:00 - 21:00</span></li>
              <li>Thursday <span>8:00 - 21:00</span></li>
              <li>Sunday <span>8:00 - 21:00</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="footer-item">
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <i className="bx bxs-location-plus" />
                <span>Vesu, Surat</span>
              </li>
              <li>
                <i className="bx bxs-phone-call" />
                <a href="tel:+911234567890">+91-1234567890</a>
                <a href="tel:+911234567890">+91-1234567890</a>
              </li>
              <li>
                <i className="bx bxs-paper-plane" />
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#432b262f2f2c032a2d35226d202c2e">
                  <span className="__cf_email__" data-cfemail="4c24292020230c25223a2d622f2321">deltaedutech@gmail.com</span></a>
                <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#e68f888089a68f889087c885898b">
                  <span className="__cf_email__" data-cfemail="0a63646c654a63647c6b24696567">deltaedutech@gmail.com</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <p>Copyright @
        Delta Eductech. Developed By <a href={url} target="_blank" rel="noreferrer">Phygital Business Clinic</a></p>
    </div>
  </div>
  <div className="footer-shape">
    <img src="assets/img/footer-bg.png" alt="Footer" />
  </div>
</footer>

    </>
  )
}
