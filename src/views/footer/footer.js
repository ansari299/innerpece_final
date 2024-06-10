import React from "react";
import logo from "../../assets/svg/footer_logo.svg";
import r_btn from "../../assets/svg/r_btn.svg";
import line from "../../assets/svg/line.svg";
import v from "../../assets/svg/Vector.svg";

function Footer() {
  return (
    <div className="container-fluid footer_color">
       
      <div className="footer_bg mt-5">
          <div className="row flalign">
            <div className="col-md-5 p-5 mt-3 brr">
              <img id="footer_logo" src={logo} alt="Logo" />
              <h1 className="f1 mt-2">
                Guiding Excellence, Transforming Futures
              </h1>
              <h1 className="f2 mt-2">
                <img className="me-3" id="footer_logon" src={r_btn} alt="Logo" />
                Get In Touch
              </h1>
              <h1 className="f3 mt-2">
                Copyright © 2024 Innerpecetravels. All Rights Reserved
              </h1>
            </div>
            <div className="col-md-3 mt-3">
              <h1 className="f4">Useful Links</h1>
              <img id="footer_logo" src={line} alt="Logo" />
              <ul className="list-group">
                <li className="list-group-item  ">
                  <a href="#" className="footerli"><img className="v_img" src={v} alt="v" /> Home </a>
                </li>
                <li className="list-group-item  footerli">
                <a href="#" className="footerli"><img className="v_img" src={v} alt="v" /> Destinations </a>
                </li>
                <li className="list-group-item  footerli">
                <a href="#" className="footerli"><img className="v_img" src={v} alt="v" /> Tour </a>
                </li>
                <li className="list-group-item  footerli">
                <a href="#" className="footerli"><img className="v_img" src={v} alt="v" /> Shop </a>
                </li>
                <li className="list-group-item  footerli">
                <a href="#" className="footerli"> <img className="v_img" src={v} alt="v" /> Blog </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mt-3">
              <h1 className="f5">Get In Touch With Us</h1>
              <img id="footer_logo" src={line} alt="Logo" />
              <h1 className="f6 mt-2">
                Lorem ipsum dolor sit amet consectetur. Fames a non accumsan.
              </h1>
              <h1 className="f7 mt-2">(308) 555-0121</h1>
              <h1 className="f8 mt-2">debbie.baker@example.com</h1>
              <h1 className="f9 mt-2">Get news & updates</h1>
              <h1 className="f11 mt-2"></h1>
              <h1 className="f10 mt-2">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies.
              </h1>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Footer;
