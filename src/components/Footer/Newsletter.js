import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant" style={{ color: 'palegoldenrod' }}>Subscribe to our news letter</h1>
      <p className="p__opensans" style={{ color: 'white' }}>And never miss out latest updates</p>
    </div>
    <div className="app__newsletter-input flex__center flex-column flex-md-row">
      <input type="email" placeholder="Enter your Email address" className="me-md-4 mb-4 mb-md-0" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
