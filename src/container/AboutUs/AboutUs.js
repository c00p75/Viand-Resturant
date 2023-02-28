import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__pading" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.V2} alt="letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us </h1>
        <img className="spoon__img" src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Our menu has been cleverly and creatively crafted with the amazing flavor combinations to choose from.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
    </div>

    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="knife" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History </h1>
        <img className="spoon__img" src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">Our menu has been cleverly and creatively crafted with the amazing flavor combinations to choose from.</p>
        <button type="button" className="custom__button">Learn More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
