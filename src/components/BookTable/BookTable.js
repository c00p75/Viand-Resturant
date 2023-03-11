import React from 'react';
import Modal from './Modal';
import { images } from '../../constants';
import './BookTable.css';

const BookTable = () => {
  const scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.querySelector('#reserve').style.opacity = 1;
    } else {
      document.querySelector('#reserve').style.opacity = 0;
    }
  };

  window.onscroll = () => scrollFunction();

  return (
    <>
      <button type="button" className="custom__button px-0" id="reserve" data-bs-toggle="modal" data-bs-target="#TableBooking">
        <p className="d-flex d-flex justify-content-center align-items-center m-0 gap-2">
          <span>Book A Table</span>
          <img src={images.calendar} alt="food icon" id="calendar" />
        </p>
      </button>
      <Modal />
    </>
  );
};

export default BookTable;
