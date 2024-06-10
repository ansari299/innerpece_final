import React from "react";
import arrow_icon from "../../../assets/svg/arrow_icon.svg";

const Section_2 = () => {
  return (
   
      <div className="bg-image d-flex align-items-center justify-content-center">
        <div className="container text-container">
          <div className="row">
             <div className="col-md-4">
                <h4 className="text-center">BULK</h4>
                <h1 className="text-center">BOOKING</h1>
                <div className="text-center">
                <a className="btn  event_btn text-center" href="#">
                  <span id="event_btn_txt" className="text-center">EXPLORE MORE  <img src={arrow_icon} className="img-fluid rounded-circle " alt="..." style={{ width: '15px', height: '25px' }} /> </span>
                </a>
                </div>
               
             </div>
           
          </div>
    
          
          
        </div>
      </div>
 

  );
};

export default Section_2;
