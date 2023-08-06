import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    const imgContainer = document.querySelector('.app__gallary-images_card');
    const elementWidth = (parseFloat(window.getComputedStyle(imgContainer).width));
    if (direction === 'left') {
      current.scrollLeft -= elementWidth;
    } else {
      current.scrollLeft += elementWidth;
    }
  };

  const gallaryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

  return (
    <div className="app__gallary flex__center">
      <div className="app__gallary-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallary</h1>
        <p className="p__opensans mt-3">Here are some of our popular meals</p>
      </div>

      <div className="app__gallary-images">
        <div className="app__gallary-images_container" ref={scrollRef}>
          {gallaryImages.map((img, index) => (
            <div className="app__gallary-images_card flex__center" key={`id${index + 1}`}>
              <img src={img} alt="gallary" loading="lazy" />
              <BsInstagram className="gallary__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallary-images_arrow">
          <BsArrowLeftShort className="gallary__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallary__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
