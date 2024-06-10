import React from 'react';

import sec1 from "../../../assets/svg/sec_1.svg";
import sec2 from "../../../assets/svg/sec_2.svg";
import sec3 from "../../../assets/svg/sec_3.svg";

const BlurImageSection = ({ image, text }) => {
  return (
    <div className="col-sm-4">
      <div className="blur-image-section" style={{ backgroundImage: `url(${image})` }}>
        <div className="text-center-blur">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
};

const Section_0 = () => {
  return (
    <div className="container section mt-5 mb-5">
      <div className="row">
        <BlurImageSection
          image={sec1}
          text="Western Ghats"
        />
        <BlurImageSection
          image={sec2}
          text="Himalayas"
        />
        <BlurImageSection
          image={sec3}
          text="Chola Dynasty"
        />
      </div>
    </div>
  );
};

export default Section_0;
