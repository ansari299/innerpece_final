import React from 'react';
import { Link } from 'react-router-dom';
import l1 from "../../../assets/svg/l1.svg";
import l2 from "../../../assets/svg/l2.svg";
import l3 from "../../../assets/svg/l3.svg";
import l4 from "../../../assets/svg/l4.svg";

import l5 from "../../../assets/svg/l5.svg";
import l6 from "../../../assets/svg/l6.svg";
import l7 from "../../../assets/svg/l7.svg";
import l8 from "../../../assets/svg/l8.svg";



import map_img from "../../../assets/svg/map_img.svg";
import cal_img from "../../../assets/svg/cal_img.svg";

const Section_3 = () => {
  const cardData = [
    { title: 'Diving in Amed Area by Usam', text: 'Gianyar, Bali' ,text2:'Dec 1, 2024'},
    { title: 'Diving in Amed Area by Usam', text: 'Gianyar, Bali' ,text2:'Dec 1, 2024'},
    { title: 'Diving in Amed Area by Usam', text: 'Gianyar, Bali' ,text2:'Dec 1, 2024'},
    { title: 'Diving in Amed Area by Usam', text: 'Gianyar, Bali' ,text2:'Dec 1, 2024'}
  ];

  const imagePaths = [l1, l2,l3,l4];
  const imagePaths2 = [l5, l6,l7,l8];

  return (
    <div className="container mt-3">
         <h1 className="mb-4 loc_title">Explore Upcoming Events</h1>
      <div className="row">
        {/* Loop over cardData */}
        {cardData.map((card, index) => (
          
          <div key={index} className="col-md-3">
            <Link to={"villas"}>
            <div className="card">
              {/* Use corresponding image from imagePaths */}
              <img className="card-img-top c_img" src={imagePaths[index % imagePaths.length]} alt="Card" />
              <div className="card-body">
                <h4 className="card-title c1">{card.title}</h4>
                <div className="card-text c2 "> <img className="map_img" src={map_img} alt="Card" /><span className='p-1'>{card.text}</span></div>
                 <hr></hr>
                <div className="card-text c2 "> <img className="cal_img" src={cal_img} alt="Card" /><span className='p-1'>{card.text2}</span></div>
              </div>
            </div>
            </Link>
          </div>  
        ))}
      </div>

      <div className="row mt-5 mb-5">
        {/* Loop over cardData */}
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              {/* Use corresponding image from imagePaths */}
              <img className="card-img-top c_img" src={imagePaths2[index % imagePaths2.length]} alt="Card" />
              <div className="card-body">
                <h4 className="card-title c1">{card.title}</h4>
                <div className="card-text c2 "> <img className="map_img" src={map_img} alt="Card" /><span className='p-1'>{card.text}</span></div>
                 <hr></hr>
                <div className="card-text c2 "> <img className="map_img" src={cal_img} alt="Card" /><span className='p-1'>{card.text2}</span></div>
                
               
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5 do_color mb-5">
         <div className="col-md-8">
             <h1 className='do_text_1'>Do you want to experience an event with us?</h1>
             <h1 className='do_text_2'>Dont wait any longer</h1>
         </div>
         <div className="col-md-4 do_btn">
              <a href='#' className='btn btn-white talk_btn'>Talk to us</a>
         </div>
      </div>

  
    </div>
  );
}

export default Section_3;
