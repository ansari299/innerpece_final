import React from 'react';



function Section_initial() {

  return (
    <>
    <div id="bg_1">
      {/* <video autoPlay muted loop className="video">
        <source src="../svg/background.gif" type="video/mp4" />
      </video> */}
      <div className="container-fluid">
        <div className="row blur_design_row">
          <div className="col-lg-2 d-none d-lg-block"></div>
          <div className="col-lg-8 col-12 blur_design">
            <div className="row blur_content">
              <div className="col-lg-1 d-none d-lg-block"></div>
              <div className="col-lg-2 col-md-3 col-12 mb-3 mb-md-0">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                ></input>
              </div>
              <div className="col-lg-2 col-md-3 col-12 mb-3 mb-md-0">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                ></input>
              </div>
              <div className="col-lg-2 col-md-3 col-12 mb-3 mb-md-0">
                <select className="form-select">
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Goa</option>
                </select>
              </div>
              <div className="col-lg-2 col-md-3 col-12 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Person"
                ></input>
              </div>
              <div className="col-lg-2 col-md-3 col-12 mb-3 mb-md-0">
                <a className="btn event_btn" href="#">
                  <span id="event_btn_txt">Book Now</span>
                </a>
              </div>
              <div className="col-lg-1 d-none d-lg-block"></div>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block"></div>
        </div>
      </div>

      
    </div>
    </>
  );
}

export default Section_initial;
