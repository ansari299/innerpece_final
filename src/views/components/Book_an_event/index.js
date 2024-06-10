import React, { useState } from 'react';
import { Row, Col } from "react-bootstrap";
import backgroundImage from "../../../assets/img/background.svg"
import content from "../../../assets/img/white.svg";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import moment from 'moment'; // Import moment for date parsing and formatting
import AryuFamily from './AryuFamily';
import AryuFamilyContent from './AryuFamilyContent';
import Celebrating from './Celebrating';
import Further from './Further';
import Reason from './Reason';
import "../../../assets/css/book_an_event/App.css";
import calender from "../../../assets/img/Carousel/calender.svg"


function BookEvent() {

  const [date, setDate] = useState('');

  // Function to handle date change
  const handleDateChange = (selectedDates) => {
    setDate(selectedDates[0]);
  };

  const handleCalendarIconClick = () => {
    const flatpickrInput = document.querySelector('.flatpickr .flatpickr-input');
    if (flatpickrInput) {
      flatpickrInput.click();
    }
  };
  
  return (
    <>
      <div className="App mt-5">
      <div className="container mtt">
      <img src={backgroundImage} alt="Background" className="background-image" />
        <div className="content">
          <Row>
            <Col lg={6} md={12}>
              <div className='d-flex justify-content-center align-items-center' style={{ height: '100%' }}>
                <img src={content} alt='logo' />
              </div>
            </Col>
            <Col lg={6} md={12} sm={6}>
            <div className='mt-5'>
              <div className="contactcard p-3">
              <h2 className='h2' style={{fontWeight: "800"}}>G E T &nbsp; I N &nbsp; T O U C H</h2>
                <div className="row d-flex flex-row justify-content-center">
                  <div className="col-md-6 d-flex flex-column align-items-center">
                      <div className="col-10">
                        <input type="text" className="inputarea" name="name" placeholder="Name"></input>
                      </div>
                      <div className="col-10">
                        <input type="email" className="inputarea" name="email" placeholder="Email"></input>
                      </div>
                      <div className="col-10">
                        <select className="form-select inputarea" defaultValue="" placeholder="Number of People">
                          <option value="" disabled selected hidden>Number of People</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="col-10 flatpickr">
                      <Flatpickr className="inputarea" placeholder="Tentative Check In" value={date}
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
                        <img src={calender} alt="Calender icon" className='calenderImg' onClick={handleCalendarIconClick}/>
                      </div>
                      <div className="col-10 pt-4">
                        <div className='text' style={{ fontWeight: "600", textAlign: "left" }}>Would you require additional assistance for decor/set-ups?</div>
                        <div className='d-flex flex-column align-items-start'>
                          <div className='d-flex align-items-center'>
                            <input type="radio" className="custom-radio" name="confirmation" id="confirmationCheckboxYes" />
                            <label htmlFor="confirmationCheckboxYes" className='text ms-2'>Yes</label>
                          </div>
                          <div className='d-flex align-items-center'>
                            <input type="radio" className="custom-radio" name="confirmation" id="confirmationCheckboxNo" />
                            <label htmlFor="confirmationCheckboxNo" className='text ms-2'>No</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-10">
                        <input type="phoneno" className="inputarea" name="phoneno" placeholder="If yes, please specify."></input>
                      </div>

                  </div>
                  <div className="col-md-6 d-flex flex-column align-items-center">
  
                      <div className="col-10">
                        <input type="text" className="inputarea" name="Phone" placeholder="Phone"></input>
                      </div>
                      <div className="col-10">
                        <select className="form-select inputarea" defaultValue="" placeholder="Number of People">
                          <option value="" disabled selected hidden>What are you celebra...</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="col-10">
                        <select className="form-select inputarea" defaultValue="" placeholder="Number of People">
                          <option value="" disabled selected hidden>Location Preferred</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="col-10">
                        <input type="" className="inputarea" name="What is Your Per Pers..." placeholder="What is Your Per Pers..."></input>
                      </div>
                      <div className="col-10 pt-4">
                        <div className='text' style={{ fontWeight: "600", textAlign: 'left' }}>Your Plan *</div>
                        <div className='d-flex flex-column align-items-start'>
                        <div className='d-flex justify-content-center align-items-center me-3'>
                          <input type="radio" className="custom-checkbox px-4" name="plan" id="confirmationCheckboxYes" />
                          <label htmlFor="confirmationCheckboxYes" className='text ms-8'>Overnight Stay</label>
                        </div>
                          <div className='d-flex justify-content-center align-items-center'>
                            <input type="radio" className="custom-checkbox" name="plan" id="confirmationCheckboxNo" />
                            <label htmlFor="confirmationCheckboxNo" className='text ms-2'>Day Event</label>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className='p-3'>
                    <p className='grey-text'>By clicking on submit you agree to our privacy policy</p>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-sm px-5 py-2 request-btn">Request a Quote</button>
                  </div>
                </div>
              </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
        <AryuFamily />
        <AryuFamilyContent/>
        <Celebrating/>
        <Further/>
        <Reason/>
    </div>
    </>
  );
}

export default BookEvent;