import React from 'react'


export const ContactForm = () => {
  return (
    <>
 <div className="contact-area pt-100 pb-70">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12">
        <div className="form-group row">
          <form id="contactForm" noValidate="true">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group has-error">
                  <input type="text" name="name" id="name" className="form-control" placeholder="Name" required data-error="Please enter your name" />
                  <div className="help-block with-errors">
                    <ul className="list-unstyled">
                      <li>Please enter your name</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="email" name="email" id="email" className="form-control" placeholder="Email" required data-error="Please enter your email" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" name="phone_number" id="phone_number" placeholder="Phone" required data-error="Please enter your number" className="form-control" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Subject" required data-error="Please enter your subject" />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <textarea name="message" className="form-control" id="message" cols={30} rows={8} placeholder="Write message" required data-error="Write your message" defaultValue={""} />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn common-btn disabled" style={{pointerEvents: 'all', cursor: 'pointer'}}>
                  Send Message
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
