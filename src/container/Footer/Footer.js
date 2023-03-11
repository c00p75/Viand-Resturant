import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
// import SubHeading from '../../components';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import '../../components/Navbar/Navbar.css';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding pb-0">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links flex-column flex-md-row mt-5 px-3">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">No 57 Munali mall, Lusaka, Zambia</p>
        <p className="p__opensans">+260974549983</p>
        <p className="p__opensans">+260965790620</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__navbar--logo d-flex justify-content-start align-items-center fw-bold m-0">
          Viand
        </h1>
        <p className="p__opensans mx-0 mx-md-4">&ldquo;The best way to find your self is to lose yourself in the service of others&ldquo;</p>
        <img src={images.spoon} alt="spoon" className="mt-3" />
        <div className="app__footer-links_icons mt-1">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className="p__opensans">Monday - Friday: </p>
        <p className="p__opensans">08:00 am - 02:00 am</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 am - 03:00 am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Viand. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
