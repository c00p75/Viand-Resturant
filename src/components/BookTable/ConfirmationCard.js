import { PropTypes } from 'prop-types';
import { images } from '../../constants';

const ConfirmationCard = ({
  userInput, emailInput, location, tableSize, bookedDate, timeSlot,
}) => (
  <div className="confirmation card">
    <h1 className="app__navbar--logo d-flex justify-content-start align-items-center fw-bold m-0" style={{ color: 'goldenrod' }}>
      Viand
    </h1>
    <div className="confirmation-details">
      <div className="p__cormorant">
        <span>Name: </span>
        <span>{userInput}</span>
      </div>
      <div className="p__cormorant">
        <span>Email: </span>
        <span>{emailInput}</span>
      </div>
      <div className="p__cormorant">
        <span>branch: </span>
        <span>{location}</span>
      </div>
      <div className="p__cormorant">
        <span>Date: </span>
        <span>{bookedDate.$d.toDateString()}</span>
      </div>
      <div className="p__cormorant">
        <span>Table Size: </span>
        <span>{tableSize}</span>
      </div>
      <div className="p__cormorant">
        <span>Time: </span>
        <span>{timeSlot}</span>
      </div>
    </div>
    <div className="d-flex flex-wrap">
      <img src={images.checked} alt="checkmark" style={{ width: '3em', height: '3em' }} />
      {' '}
      <span className="headtext__cormorant" style={{ fontSize: '2em', fontWeight: '900', color: 'seagreen' }}>Reserved</span>
    </div>
    <img src={images.corner} alt="corner deco" className="corner" id="corner-1" />
    <img src={images.corner} alt="corner deco" className="corner" id="corner-2" />
    <img src={images.corner} alt="corner deco" className="corner" id="corner-3" />
    <img src={images.corner} alt="corner deco" className="corner" id="corner-4" />
  </div>
);

ConfirmationCard.propTypes = {
  userInput: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  tableSize: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  timeSlot: PropTypes.string.isRequired,
  bookedDate: PropTypes.string.isRequired,
};

export default ConfirmationCard;
