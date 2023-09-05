import React from 'react'

export const HeaderForAbout = () => {
  return (
    <>
      <div className="page-title-area title-bg-one">
    <div className="title-shape">
      <img src="assets/img/title/title-bg-1.png" alt="Shape" />
    </div>
    <div className="d-table">
      <div className="d-table-cell">
        <div className="container">
          <div className="title-content">
            <h2>About</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />
              </li>
              <li>
                <span>About</span>
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
