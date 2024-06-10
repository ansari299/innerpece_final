import React from 'react'
import cots from "../../../assets/img/cots.svg"
import { Row, Col } from "react-bootstrap";
import trustImg from "../../../assets/img/trustImg.svg"
import "../../../assets/css/book_an_event/AryuFamilyContent.css"

export default function AryuFamilyContent() {
  return (
    <div className='container marginBox'>
    <Row>
        <Col lg={6} md={12}>
        <div>
            <img src={cots} alt='cots'/>
        </div>
        <div className='trustContent'>  Lorem ipsum dolor sit amet consectetur. Fames et ultrices turpis risus eu enim 
        tincidunt. Risus commodo morbi dictumst non non at dapibus. Donec mattis dignissim non enim accumsan. Id luctus 
        egestas mattis dolor fermentum tortor eu urna eu. Interdum elit amet tincidunt ipsum lectus orci diam lectus amet.
         Mattis velit tristique euismod bibendum et integer lectus blandit in. Molestie dis tincidunt nulla volutpat. 
         Neque ut a eget pharetra non at sed aliquam augue.</div>
         <div className='trustContent'>Lacus congue morbi ut orci commodo ipsum quam egestas.</div>
        <div className='para'>Lorem ipsum dolor sit amet consectetur. Nisl aliquam porttitor neque eget velit eu metus 
        phasellus purus. In id.</div>
        </Col>
        <Col lg={6} md={6} style={{padding: "2rem"}}>
            <div>
                <img className='img-fluid' src={trustImg} alt='Trust us'/>
            </div>
        </Col>
    </Row>
    </div>
  )
}
