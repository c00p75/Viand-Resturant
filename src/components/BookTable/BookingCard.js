import { PropTypes } from 'prop-types';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineAddCircle } from 'react-icons/md';
import { HiMinusCircle } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { reservations } from '../../constants';

const BookingCard = ({
  handlePrev,
  tableSize,
  setTableSize,
  location,
  setLocation,
  bookedDate,
  setBookedDate,
  reservation,
  timeSlot,
  setTimeSlot,
  reserved,
  setReserved,
}) => (
  <form className="card">
    <div className="container d-flex flex-column py-3" id="booking-card">
      <div>
        <h3 className="p__cormorant">Branch</h3>
        <div className="custom-border">
          <div className="btn-group">
            <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {location}
            </button>
            <div className="dropdown-menu dropdown-menu-start" aria-labelledby="triggerId">
              {reservations.branches.map((branch, index) => (
                <>
                  <h6 className="dropdown-header" key={`header_id${index + 1}`}>{branch.Continent}</h6>
                  {branch.locations.map((location, index) => (
                    <button type="button" className={`dropdown-item ${!location.available ? 'disabled' : ' '}`} key={`location_id${index + 1}`} onClick={(e) => { setLocation(e.target.textContent.trim()); }}>
                      <GoLocation />
                      {' '}
                      {location.city}
                    </button>
                  ))}
                </>
              ))}
            </div>
          </div>
          <span className="custom-header">Our Branches</span>
        </div>
      </div>

      <div className="app-modal__DatePickerContainer">
        <h3 className="p__cormorant">Select Date</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Date" value={bookedDate} disablePast onChange={(newValue) => { setBookedDate(newValue); }} />
        </LocalizationProvider>
      </div>

      <div>
        <h3 className="p__cormorant">Table size</h3>
        <div className="custom-border">
          <div className="tablesize">
            <span><BsPeople /></span>
            {' '}
            <span>
              { tableSize }
              {' '}
              {tableSize > 1 ? 'People' : 'Person'}
            </span>
            <div>
              <span>
                <HiMinusCircle
                  className="me-2"
                  onClick={() => {
                    if (tableSize > 1) {
                      setTableSize(tableSize - 1);
                      setReserved(reservation((tableSize - 1).toString()));
                    }
                  }}
                />
              </span>
              <span>
                <MdOutlineAddCircle onClick={() => {
                  if (tableSize < 10) {
                    setTableSize(tableSize + 1);
                    setReserved(reservation((tableSize + 1).toString()));
                  }
                }}
                />
              </span>
            </div>
          </div>
          <span className="custom-header" id="tablesize__sub-heading">Select table size</span>
        </div>
      </div>

      <div id="time-slot">
        <h3 className="p__cormorant">Time</h3>
        <div className="custom-border">
          <div className="btn-group">
            <button className="btn dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {reserved.includes(timeSlot) ? timeSlot : reserved[0]}
            </button>
            <div className="dropdown-menu dropdown-menu-start" aria-labelledby="triggerId">
              {reserved.map((slot, index) => (
                <button type="button" className="dropdown-item" key={`slot_id${index + 1}`} onClick={(e) => { setTimeSlot(e.target.innerHTML); setTimeSlot(e.target.innerHTML); }}>
                  {slot}
                </button>
              ))}

            </div>

          </div>
          <span className="custom-header">Available Hours</span>
        </div>
      </div>

    </div>
    <div>
      <button type="button" className="enter" onClick={() => handlePrev()}>Previous</button>
    </div>
  </form>
);

BookingCard.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  tableSize: PropTypes.number.isRequired,
  setTableSize: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
  setBookedDate: PropTypes.func.isRequired,
  reservation: PropTypes.func.isRequired,
  timeSlot: PropTypes.string.isRequired,
  setTimeSlot: PropTypes.func.isRequired,
  reserved: PropTypes.instanceOf(Array).isRequired,
  bookedDate: PropTypes.instanceOf(Object).isRequired,
  setReserved: PropTypes.func.isRequired,
};

export default BookingCard;
