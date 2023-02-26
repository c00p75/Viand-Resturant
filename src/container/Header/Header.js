import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';
import { images } from '../../constants';

const Header = () => (
  <div className="app__header app__wrapper section__padding d-flex flex-column flex-md-row" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase a new flavor" />
      <h1 className="app__header-h1">Key to fine dining</h1>
      <p className="p__opensans my-2">Be ready to experience fine dining at its finest with our world-class service and dishes inspired by world renoened chefs and cooks. Our menu has been cleverly and creatively crafted with the amazing flavor combinations to choose from.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
