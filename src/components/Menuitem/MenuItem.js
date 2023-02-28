import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem my-2">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name"><p className="p__cormorant m-0">{title}</p></div>
      <div className="app__menuitem-dash mx-3" />
      <div className="app__menuitem-price"><p className="p__cormorant m-0">{price}</p></div>
    </div>
    <div className="app__menuitem-sub"><p className="p__opensans">{tags}</p></div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default MenuItem;
