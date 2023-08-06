import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" loading="lazy" />
    </div>

    <div className="app__wrapper_info mt-5">
      <SubHeading title="Chef&apos;s Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content d-flex flex-column mt-5">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" loading="lazy" />
          <p className="p__opensans">Providing a wonderful experience through taste and culture.</p>
        </div>
        <p className="p__opensans">We bring souls to our reciepies</p>
      </div>
      <div className="app__chef-sign mt-5">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" loading="lazy" />
      </div>
    </div>
  </div>
);

export default Chef;
