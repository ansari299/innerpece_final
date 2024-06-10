import React from "react";
import d1 from "../../../assets/svg/d1.svg";
import d2 from "../../../assets/svg/d2.svg";
import d3 from "../../../assets/svg/d3.svg";
import d4 from "../../../assets/svg/d4.svg";

import d5 from "../../../assets/svg/d5.svg";
import d6 from "../../../assets/svg/d6.svg";
import d7 from "../../../assets/svg/d7.svg";
import d8 from "../../../assets/svg/d8.svg";
// import map_img from "../../../assets/svg/map_img.svg";
import star_img from "../../../assets/svg/star_img.svg";

const Section_5 = () => {
  const cardData = [
    {
      title: "Tamilnadu",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Kerala",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Himachal Pradesh",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Uttarakhand",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
  ];

  const cardData2 = [
    {
      title: "Ladakh",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Diving in Amed",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Delhi",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Oty",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
  ];

  const imagePaths = [d1, d2, d3, d4];
  const imagePaths2 = [d5, d6,d7,d8];

  return (
    <div className="container mt-3">
      <h1 className="mb-4 loc_title">Destination</h1>
      <div className="row">
        {/* Loop over cardData */}
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              {/* Use corresponding image from imagePaths */}
              <img
                className="card-img-top c_img"
                src={imagePaths[index % imagePaths.length]}
                alt="Card imageh"
              />
              <div className="card-body">
                <h4 className="card-title c1">{card.title}</h4>
                <div className="card-text c2 ">
                  <span className="p-1">{card.text}</span>
                </div>
                <div className="card-text c2 mt-1">
                  <img className="star_img" src={star_img} alt="Card imagek" />
                  <span className="p-1 rate_txt">{card.text2}</span>
                  <span className="p-1">{card.text3}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-5 mb-5">
        {/* Loop over cardData */}
        {cardData2.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              {/* Use corresponding image from imagePaths */}
              <img
                className="card-img-top c_img"
                src={imagePaths2[index % imagePaths2.length]}
                alt="Card imageh"
              />
              <div className="card-body">
                <h4 className="card-title c1">{card.title}</h4>
                <div className="card-text c2 ">
                  <span className="p-1">{card.text}</span>
                </div>
                <div className="card-text c2 mt-1">
                  <img className="star_img" src={star_img} alt="Card imagek" />
                  <span className="p-1 rate_txt">{card.text2}</span>
                  <span className="p-1">{card.text3}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_5;
