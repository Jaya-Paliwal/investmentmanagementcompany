import React from 'react'

export const Header = () => {
    let url;
  return (
    <>
  <div className="header-area">
  <div className="container">
    <div className="row">
      <div className="col-sm-9 col-lg-8">
        <div className="left">
          <ul>
            <li>
              <i className="bx bx-mail-send" />
              <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#cba3aea7a7a48ba2a5bdaae5a8a4a6">
                <span className="__cf_email__" data-cfemail="cea6aba2a2a18ea7a0b8afe0ada1a3"> deltaedutech@gmail.com</span></a>
            </li>
            <li>
              <i className="bx bx-phone-call" />
              <a href="tel:+99084211703"> +91-1234567890</a>
            </li>
            <li>
              <i className="bx bx-time" />
              <span> Mon - Sat: 8:00 AM - 7:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-sm-3 col-lg-4">
        <div className="right">
          <ul>
            <li>
              <a href={url} target="_blank" rel="noreferrer">
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
                <i className="bx bxl-youtube" />
              </a>
            </li>
            <li>
              <a href={url} target="_blank" rel="noreferrer">
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a href={url} target="_blank" rel="noreferrer">
                <i className="bx bxl-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </div>




    </>
  )
}
