import React from 'react';
import "../../../assets/css/book_an_event/Reason.css"
// import { Row, Col } from 'react-bootstrap';
// import img1 from '../img/Reason/img1.svg';
// import img2 from '../img/Reason/img2.svg';
// import img3 from '../img/Reason/img3.svg';
// import img4 from '../img/Reason/img4.svg';
// import img5 from '../img/Reason/img5.svg';
// import img6 from '../img/Reason/img6.svg';
// import img7 from '../img/Reason/img7.svg';
// import img8 from '../img/Reason/img8.svg';
// import img9 from '../img/Reason/img9.svg';
// import img10 from '../img/Reason/img10.svg';
import group from "../../../assets/img/Reason/group.svg"

export default function Reason() {
  return (
    <div className='container marginBox'>
      <h2 className='blueTxt'>HERE ARE A FEW REASONS TO CELEBRATE...</h2>
      <div>
        <div className='d-flex justify-content-center align-items-center'>
            <img src={group} className='eventImg' alt='group pics'/>
        </div>
        {/* <Row>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img1} alt='Location1' />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img2} alt='Location2' />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img3} alt='Location3' />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img4} alt='Location4' />
          </Col>
          <Col lg={8} md={8} sm={8} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img5} alt='Location5' />
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8} sm={8} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img6} alt='Location6' />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img7} alt='Location7' />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img8} alt='Location8' />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img9} alt='Location9' />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12} className='imgBox d-flex justify-content-center align-items-center'>
            <img src={img10} alt='Location10' />
          </Col>
        </Row> */}     
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-md getInTouchBtn'>Get in Touch</button>
      </div>
    </div>
  );
}
