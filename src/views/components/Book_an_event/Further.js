import React from 'react'
import { Row, Col } from "react-bootstrap";

export default function Further() {
  return (
    <div className='container marginBox'>
      <h2 className='blueTxt'>LOOK NO FURTHER</h2>
      <p className='para' style={{textAlign: "center", fontSize:"20px"}}>Lorem ipsum dolor sit amet consectetur. Pulvinar odio dolor tellus proin.</p>
      <Row>
        <Col lg={6} md={12}>
            <div className='trustContent'>Lorem ipsum dolor sit amet consectetur. Tincidunt fusce felis nec.</div>
            <div className='trustContent'>Lorem ipsum dolor sit amet consectetur. Magna elit gravida nunc proin. Eu.</div>
        </Col>
        <Col lg={6} md={12}>
            <div className='trustContent'>Lorem ipsum dolor sit amet consectetur. Tincidunt fusce felis nec.</div>
            <div className='trustContent'>Lorem ipsum dolor sit amet consectetur. Magna elit gravida nunc proin. Eu.</div>
        </Col>
      </Row>
    </div>
  )
}
