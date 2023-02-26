import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div className="mb-2">
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__image" />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeading;
