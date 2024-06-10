import React from 'react'
import trust from "../../../assets/img/trust.svg"


import  "../../../assets/css/book_an_event/AryuFamily.css";

export default function AryuFamily() {
  return (
    <div className="content-wrapper">
        <div className='banner'>
            <img src={trust} className='backgroundImage' alt='5000 families trusting us'/>
            <div className='overlay'></div>
            <p className='bannertext'>50,000+ FAMILIES TRUST US</p>
        </div>  
    </div>
  )
}
