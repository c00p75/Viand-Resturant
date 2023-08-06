import React, { useState } from 'react';
import dayjs from 'dayjs';
import RegistrationCard from './RegistrationCard';
import { reservations } from '../../constants';
import BookingCard from './BookingCard';
import ConfirmationCard from './ConfirmationCard';

const Modal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [edit, setEdit] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [tableSize, setTableSize] = useState(1);
  const [location, setLocation] = useState(reservations.branches[0].locations[0].city);
  const [bookedDate, setBookedDate] = useState(dayjs());
  const reservation = (tableSize) => {
    let slots;
    reservations.bookedTimeSlots.forEach((i) => {
      if (Object.keys(i)[0] === tableSize) {
        slots = reservations.timeSlots.filter((time) => !i[tableSize].slotBooked.includes(time));
      }
    });
    return slots;
  };

  const [timeSlot, setTimeSlot] = useState(reservation(tableSize.toString())[0]);
  const [reserved, setReserved] = useState(reservation(tableSize.toString()));

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="modal fade" id="TableBooking" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
      <div className="modal-dialog modal-sm modal-fullscreen" role="document">
        <div className="overflow-auto" style={{ height: '100vh' }}>
          <div className="modal-content">
            <div className={`modal-body ${currentPage === 2 ? 'px-0 px-md-5' : ''}`}>
              <div className="modal-header">
                <h3 className="modal-title headtext__cormorant" id="modalTitleId">Make A Reservation</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="booking-status d-flex gap-1 justify-content-center align-items-center py-3">
                <button type="button" className={`status ${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>{' '}</button>
                <button type="button" className={`status ${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>{' '}</button>
              </div>
              <div className="container d-flex justify-content-center align-items-center">
                {currentPage === 1 && (
                <RegistrationCard
                  handleNext={handleNext}
                  userInput={userInput}
                  emailInput={emailInput}
                  setUserInput={setUserInput}
                  setEmailInput={setEmailInput}
                />
                )}
                {(currentPage === 2 && edit === true) && (
                <BookingCard
                  handlePrev={handlePrev}
                  tableSize={tableSize}
                  setTableSize={setTableSize}
                  location={location}
                  setLocation={setLocation}
                  bookedDate={bookedDate}
                  setBookedDate={setBookedDate}
                  reservation={reservation}
                  reserved={reserved}
                  setReserved={setReserved}
                  timeSlot={timeSlot}
                  setTimeSlot={setTimeSlot}
                />
                )}
                {(currentPage === 2 && edit === false) && (
                <ConfirmationCard
                  userInput={userInput}
                  emailInput={emailInput}
                  location={location}
                  tableSize={tableSize}
                  bookedDate={bookedDate}
                  reserved={reserved}
                  timeSlot={timeSlot}
                />
                )}
              </div>
              {currentPage !== 1 && (
                <div className="modal-footer">
                  <button type="button" className="custom__button" data-bs-dismiss="modal">
                    {edit === true ? 'Cancel' : 'Done'}
                  </button>
                  <button type="button" className="custom__button" onClick={() => setEdit(!edit)}>
                    {edit === true ? 'Make Reservation' : 'Cancel Reservation'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Modal;
