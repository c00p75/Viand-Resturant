import React, { useState } from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  return (
    <div className="app__aboutus app__bg flex__center section__pading" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.V2} alt="letter" loading="lazy" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us </h1>
          <img className="spoon__img" src={images.spoon} alt="about_spoon" loading="lazy" />
          <p className={`p__opensans ${!showAbout && 'line-clamp'}`}>Viand is more than just a great meal! Along with great scenary and world class service, our incredible menu has been cleverly and creatively crafted with amazing food flavor combinations and wines to choose from. We create culinary poetry.</p>
          <button type="button" className="custom__button" onClick={() => setShowAbout(!showAbout)}>{!showAbout ? 'Learn More' : 'Show Less'}</button>
        </div>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" loading="lazy" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History </h1>
          <img className="spoon__img" src={images.spoon} alt="about_spoon" loading="lazy" />
          <p className={`p__opensans ${!showHistory && 'line-clamp'}`}>Viand is yesterday, today, and tomorrow. Viand is legacy. The foundation of our resturant lies on more than one lifetime of culinary mastery. What began as a meal stand in the streets of Rio de Janeiro 4 generations ago, has become a world class resturant currently operating in every continent with talented chefs from all over the globe who create beautiful culinary art.</p>
          <button type="button" className="custom__button" onClick={() => setShowHistory(!showHistory)}>{!showHistory ? 'Learn More' : 'Show Less'}</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
