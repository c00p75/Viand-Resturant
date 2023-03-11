import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant mb-5">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans text-light">N0 57 Munali Mall, Lusaka, Zambia</p>
        <p className="p__cormorant my-4" style={{ color: 'goldenrod' }}>Opennng hours</p>
        <p className="p__opensans text-light">Mon - Fri 10:00 am - 02:00 am</p>
        <p className="p__opensans text-light">Sat - Sun 10:00 am - 03:00 am</p>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
