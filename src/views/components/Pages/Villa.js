import React, {useState} from 'react';
import "../../../assets/css/Pages/villas.css"
import star from "../../../assets/img/star.svg"
import Calender from "../../../assets/img/Calender.svg"
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import villa from "../../../assets/img/villa/villa1.svg"
import Vector from "../../../assets/img/villa/Vector.svg"
import couple from "../../../assets/img/villa/couple 1.svg"
import baby from "../../../assets/img/villa/baby-boy 1.svg"
import pool from "../../../assets/img/villa/pool 1.svg"
import grass from "../../../assets/img/villa/grass 1.svg"
import bench from "../../../assets/img/villa/Group (2).svg"
import meal from "../../../assets/img/villa/meal 1.svg"
import theater from "../../../assets/img/villa/home-theater 1.svg"
import bed from "../../../assets/img/villa/bed.svg"
import { FaArrowRight } from "react-icons/fa6";

export default function Villa() {
  const [date, setDate] = useState('');

  const handleCategory = () => {

  }

  const handlePriceRange = () => {

  }

  const handleDateRange = () => {

  }

  const handleRating = () => {

  }

  const handleActivity = () => {

  }

  const handleDateChange = (selectedDates) => {
    setDate(selectedDates[0]);
  };

  // const handleCalendarIconClick = () => {
  //   const flatpickrInput = document.querySelector('.flatpickr .flatpickr-input');
  //   if (flatpickrInput) {
  //     flatpickrInput.click();
  //   }
  // };
  return (
      <div className='d-flex justify-content-between'>
        <div className='p-4 col-lg-3'>
          <div>
            <div className='sidebar'>
              <div className='navigation-bar'>
                <div>Home &gt; Villas in Chennai</div>
              </div>
            </div>
            <div className='filter-box'>
              <div className='d-flex justify-content-between p-3'>
                <div className="font21">Filters</div>
                <div className='resetbtn'>Reset</div>
              </div>
              <hr/>
              <div className='category-box p-3'>
                <h6 className="subtitle">Category</h6>
                <div className="d-flex align-items-center">
                  <input type='checkbox' onClick={handleCategory()}/>
                  <div onClick={handleCategory()} className='ps-2'>Promo Deals</div>
                </div>
                <div className="d-flex align-items-center">
                  <input type='checkbox' onClick={handleCategory()}/>
                  <div onClick={handleCategory()} className='ps-2'>One Day Trip</div>
                </div>
                <div className="d-flex align-items-center">
                  <input type='checkbox' onClick={handleCategory()}/>
                  <div onClick={handleCategory()} className='ps-2'>Top Vacation</div>
                </div>
                <div className="d-flex align-items-center">
                  <input type='checkbox' onClick={handleCategory()}/>
                  <div onClick={handleCategory()} className='ps-2'>Things To do</div>
                </div>
              </div>
              <hr/>
              <div className='p-3'>
                <h6 className="subtitle">Price Range</h6>
                <div className="d-flex mb-2">
                  <div className='label'>Rp</div>
                  <div><input type='text' className='input' placeholder='Minimum Price' onChange={handlePriceRange()}/></div>
                </div>
                <div className="d-flex mb-2">
                  <div className='label'>Rp</div>
                  <div><input type='text' className='input' placeholder='Maximum Price' onChange={handlePriceRange()}/></div>
                </div>
              </div>
              <hr/>
              <div className='p-3'>
                <h6 className="subtitle">Date</h6>
                <div className="d-flex">
                  <div className='label'>
                    <img className='label-date' src={Calender}  alt='Calender'/>
                  </div>
                    <Flatpickr className="inputs" placeholder="DD/MM/YYYY" value={date}
                        onChange={handleDateChange} options={{altInput: true, dateFormat: 'Y-m-d',
                          altFormat: 'd-m-Y', allowInput: true,
                          parseDate: (datestr, format) => {
                            return moment(datestr, format, true).toDate();
                          },
                          formatDate: (date, format, locale) => {
                            return moment(date).format(format);
                          }
                        }}
                        />
                </div>
              </div>
              <hr/>
              <div className='p-3'>
                <h6 className="subtitle">Rating</h6>
                <div className="d-flex">
                  <input type='checkbox' onClick={handleRating()}/>&nbsp;
                  <img src={star} alt='star' onClick={handleRating()}/>
                  <div onClick={handleRating()}> 5 Star</div>
                </div>
                <div className="d-flex">
                  <input type='checkbox' onClick={handleRating()} />&nbsp;
                  <img src={star} alt='star' onClick={handleRating()}/>
                  <div onClick={handleRating()}> 4 Star</div>
                </div>
                <div className="d-flex">
                  <input type='checkbox'onClick={handleRating()}  />&nbsp;
                  <img src={star} alt='star'onClick={handleRating()} />
                  <div onClick={handleRating()}> 3 Star</div>
                </div>
                <div className="d-flex">
                  <input type='checkbox'onClick={handleRating()}  />&nbsp;
                  <img src={star} alt='star'onClick={handleRating()} />
                  <div onClick={handleRating()}> 2 Star</div>
                </div>
                <div className="d-flex">
                  <input type='checkbox' onClick={handleRating()} />&nbsp;
                  <img src={star} alt='star' onClick={handleRating()}/>
                  <div onClick={handleRating()}> 1 Star</div>
                </div>
              </div>
              <hr/>
              <div className='p-3 activity-box'>
                <h6 className="subtitle">Activity</h6>
                <div className="d-flex justify-content-start">
                  <input type='checkbox' onClick={handleActivity()} />
                  <div className='px-2' onClick={handleActivity()}>Beach</div>
                </div>
                <div className="d-flex justify-content-start">
                  <input type='checkbox' onClick={handleActivity()} />
                  <div className='px-2' onClick={handleActivity()}>Club</div>
                </div>
                <div className="d-flex justify-content-start">
                  <input type='checkbox' onClick={handleActivity()} />
                  <div className='px-2' onClick={handleActivity()}>Cultural</div>
                </div>
                <div className="d-flex justify-content-start">
                  <input type='checkbox' onClick={handleActivity()} />
                  <div className='px-2' onClick={handleActivity()}>Natural Tourism</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='col-lg-9 p-5'>
          <div className='d-flex justify-content-between'>
            <div className='page-title'>
              Villas in Chennai
            </div>
            <div className='loved-btn'>
              Sort By : Most Loved
            </div>
          </div>
          <div className='p-2'>
          <div className='d-flex justify-content-between border'>
            <div className='col-lg-4 col-md-4 villa-img'>
              <img src={villa} alt='villa'/>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-5'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5>Nilgiri's Allure</h5>
                  <p>Chennai, Tamil Nadu</p>
                </div>
                <div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <img src={star} alt='star'/>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4>5</h4>
                      <div> of 5</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                  <div>Upto 12 Guests</div>
                    <div>
                      <img src={Vector} alt='vector'/>
                    </div>
                  <div>4 Rooms</div>
                    <div>
                      <img src={Vector} alt='vector'/>
                    </div>
                  <div>5 Baths</div>
              </div>
              <div>
                <div className='d-flex justify-content-between'>
                  <div>Great for:</div>
                  <div className='d-flex justify-content-between'>
                    <img src={couple} alt='icon'/>
                    <div>Senior Citizen</div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <img src={baby} alt='baby'/>
                    <div>Kids</div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className='d-flex justify-content-between'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <div><img className='icon' src={pool} alt='pool'/></div>
                  <div className='small-text'>Swimming Pool</div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>                  
                  <div><img className='icon' src={grass} alt='grass'/></div>
                  <div className='small-text'>Lawn</div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>                  
                  <div><img className='icon' src={bench} alt='bench'/></div>
                  <div className='small-text'>Beach View</div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <div><img className='icon' src={meal} alt='meal'/></div>
                  <div className='small-text'>Meals</div>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <div><img className='icon' src={theater} alt='theater'/></div>
                  <div className='small-text'>Home Theater</div>
                </div>
              </div>
            </div>
            <vr/>
            <div className='col-lg-3 col-md-3 sm-3'>
              <div className="mt-5 d-flex flex-column align-items-center price">
                <div className='price-text'>
                  ₹16,000
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                  <img src={bed} alt='bed'/>
                  <div>For 4 Rooms</div>
                </div>
                <div className='col-4-text'>for 32 Nights + Taxes( 4 rooms)</div>
                <div className='d-flex align-items-center justify-content-center view-btn'>
                  <div>View</div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}
