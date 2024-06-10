import React from "react";
import e1 from "../../../assets/svg/e1.svg";
import e2 from "../../../assets/svg/e2.svg";
import e3 from "../../../assets/svg/e3.svg";
import e4 from "../../../assets/svg/e4.svg";

import e5 from "../../../assets/svg/e5.svg";
import e6 from "../../../assets/svg/e6.svg";
import e7 from "../../../assets/svg/e7.svg";
import e8 from "../../../assets/svg/e8.svg";

// import map_img from "../../../assets/svg/map_img.svg";
import star_img from "../../../assets/svg/star_img.svg";

const Section_4 = () => {
  const cardData = [
    {
      title: "Diving in Amed Area by Usam",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Diving in Amed Area by Usam",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Diving in Amed Area by Usam",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
    {
      title: "Diving in Amed Area by Usam",
      text: "Gianyar, Bali",
      text2: "4.2",
      text3: "(230 Reviews)",
    },
  ];

  const imagePaths = [e1, e2, e3, e4];
  const imagePaths2 = [e5, e6,e7,e8];

  return (
    <div className="container mt-3">
      <h1 className="mb-4 loc_title">Explore Popular Events</h1>
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
        {cardData.map((card, index) => (
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

export default Section_4;
