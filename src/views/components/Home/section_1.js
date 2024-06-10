import React from 'react';
import loc1 from "../../../assets/svg/loc_1.svg";
import loc2 from "../../../assets/svg/loc_2.svg";
import loc3 from "../../../assets/svg/loc_3.svg";
import loc4 from "../../../assets/svg/loc_4.svg";
import loc5 from "../../../assets/svg/loc_5.svg";
import loc6 from "../../../assets/svg/loc_6.svg";
import loc7 from "../../../assets/svg/loc_7.svg";
import loc8 from "../../../assets/svg/loc_8.svg";


const CardComponent = ({ image, title, subtitle }) => {
  return (
    <div className="card card_1 mb-3">
    <div className="row g-0">
      <div className="col-4 d-flex align-items-center justify-content-center">
        <img src={image} className="img-fluid rounded-circle" alt="..." style={{ width: '80px', height: '80px' }} />
      </div>
      <div className="col-8">
        <div className="card-body">
          <h5 className="card-title_1">{title}</h5>
          <p className="card-text_1">{subtitle}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

const Section_1 = () => {
  return (
    <div className="container mt-5 ">
    <h1 className="mb-4 loc_title">Nearby Getaways & Stays</h1>
    <div className="row g-4 mt-3">
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc1}
          title="Chennai" 
          subtitle="21 Events"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc2}
          title="Coimbature" 
          subtitle="21 Events"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc3}
          title="Bangalore" 
          subtitle="21 Events"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc4} 
          title="Hyderabad" 
          subtitle="21 Events"
        />
      </div>
    </div>
    <div className="row g-4 mt-1 mb-3">
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc5}
          title="Mumbai" 
          subtitle="21 Events"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc6}
          title="Kerala" 
          subtitle="21 Events"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc7}
          title="Kolkata" 
          subtitle="21 Events"
        />
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <CardComponent 
          image={loc8} 
          title="Delhi" 
          subtitle="21 Events"
        />
      </div>
    </div>
  </div>
  );
};

export default Section_1;
