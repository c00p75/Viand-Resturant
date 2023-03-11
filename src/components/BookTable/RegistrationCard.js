import { PropTypes } from 'prop-types';

const RegistrationCard = ({
  handleNext, userInput, emailInput, setUserInput, setEmailInput,
}) => (
  <form className="card" onSubmit={() => handleNext()}>
    <h5 className="singup">Register</h5>
    <div className="inputBox">
      <input type="text" name="name" value={userInput} required="required" className="pt-3" onChange={(e) => { setUserInput(e.target.value); }} />
      <span>Username</span>
    </div>
    <div className="inputBox1">
      <input type="email" name="email" value={emailInput} required="required" className="pt-3" onChange={(e) => { setEmailInput(e.target.value); }} />
      <span className="user">Email</span>
    </div>
    <button type="submit" className="enter" id="submit">Next</button>
  </form>
);

RegistrationCard.propTypes = {
  handleNext: PropTypes.func.isRequired,
  userInput: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  setUserInput: PropTypes.func.isRequired,
  setEmailInput: PropTypes.func.isRequired,
};

export default RegistrationCard;
