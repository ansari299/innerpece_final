import React, { useState } from 'react';
import Celebration from "../../../assets/img/Carousel/img1.svg";
import Celebration2 from "../../../assets/img/Carousel/img2.svg";
import Celebration3 from "../../../assets/img/Carousel/img3.svg";
import Celebration4 from "../../../assets/img/Carousel/img4.svg";
import Celebration5 from "../../../assets/img/Carousel/img5.svg";
import Celebration6 from "../../../assets/img/Carousel/img6.svg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../../../assets/css/book_an_event/Celebrating.css";

export default function Celebrating() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const customPrevArrow = (onClickHandler, hasPrev, label) => (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={!hasPrev}
      className="custom-arrow custom-prev"
      aria-label={label}
    >
      <FaChevronLeft className='chevron' />
    </button>
  );

  const cardData = [
    { title: 'Reunion Picnics And Meets', text: 'Give your undivided attention to your friends, while we give our attention to details' },
    { title: 'Corporate Events', text: 'Focus on your business, while we handle all the arrangements for your corporate events' },
    { title: 'Birthday Parties', text: 'Celebrate your special day with a memorable birthday party planned by us' },
    { title: 'Reunion Picnics And Meets', text: 'Give your undivided attention to your friends, while we give our attention to details' },
    { title: 'Reunion Picnics And Meets', text: 'Give your undivided attention to your friends, while we give our attention to details' },
    { title: 'Decadent Dinners On The Lawn', text: 'Celebrate your special anniversary with a personalised sit down dinner' }
  ];

  const customNextArrow = (onClickHandler, hasNext, label) => (
    <button
      type="button"
      onClick={onClickHandler}
      disabled={!hasNext}
      className="custom-arrow custom-next"
      aria-label={label}
    >
      {/* Using FontAwesome icons */}
      <FaChevronRight className='chevron'/>
    </button>
  );

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className='marginBox'>
      <h2 className="blueTxt">WHAT ARE YOU CELEBRATING?</h2>
      <div className="carousel-container">
        <Carousel
          renderArrowPrev={customPrevArrow}
          renderArrowNext={customNextArrow}
          infiniteLoop
          useKeyboardArrows
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentSlide}
          onChange={handleSlideChange}
        >
          <div>
            <img src={Celebration} alt="First slide" />
          </div>
          <div>
            <img src={Celebration2} alt="Second slide" />
          </div>
          <div>
            <img src={Celebration3} alt="Third slide" />
          </div>
          <div>
            <img src={Celebration4} alt="Fourth slide" />
          </div>
          <div>
            <img src={Celebration5} alt="Fifth slide" />
          </div>
          <div>
            <img src={Celebration6} alt="Sixth slide" />
          </div>
        </Carousel>
        <div className="carousel-banner">
          <div className="carousel-banner-title">
            {cardData[currentSlide].title}
          </div>
          <div className="carousel-banner-text">{cardData[currentSlide].text}</div>
        </div>
      </div>
    </div>
  );
}