import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const links = [
  {
    path: '#home',
    text: 'Home',
  },
  {
    path: '#about',
    text: 'About',
  },
  {
    path: '#menu',
    text: 'Menu',
  },
  {
    path: '#contact',
    text: 'Contact',
  },
];

const Navbar = () => {
  const [toggledHamburgerMenu, toggleHamburgerMenu] = useState(false);

  const handleClick = () => {
    toggleHamburgerMenu(!toggledHamburgerMenu);
  };

  return (
    <nav className="app__navbar d-flex justify-content-between align-items-center p-3 px-5">
      <a href="/" className="flex__center">
        <h1 className="app__navbar--logo d-flex justify-content-start align-items-center fw-bold m-0">
          Viand
        </h1>
      </a>

      <ul className="list-unstyled  d-none d-md-flex justify-coontent-center m-0">
        {links.map((link, index) => (
          <li key={`id${index + 1}`} className="mx-md-2 mx-lg-3 app__navbar--links p__opensans">
            <a href={link.path}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar--login d-none d-md-flex justify-content-end p__opensans me-md-5">
        <div>
          <span data-bs-toggle="modal" data-bs-target="#TableBooking" className="nav-booking">Book a table</span>
        </div>
      </div>
      <div className="app__navbar--smallscreen d-flex flex-column d-md-none">
        {!toggledHamburgerMenu && <GiHamburgerMenu className="d-flex app__navbar--menu_btn" onClick={handleClick} />}
        {toggledHamburgerMenu && (
        <div className="app__navbar--smallscreen_overlay slide-bottom position-fixed top-0 start-0 d-flex flex-column align-items-center">
          <MdOutlineRestaurantMenu style={{ color: 'goldenrod', right: '15px' }} className="app__navbar--menu_btn d-flex position-absolute mt-4" onClick={handleClick} />
          <ul className="list-unstyled d-flex flex-column justify-content-center text-light gap-4" style={{ height: '100%' }}>
            {links.map((link, index) => (
              <li key={`id${index + 1}`} className="mx-md-2 mx-lg-3 app__navbar--links">
                <button type="button" style={{ width: '100%', background: 'none', border: 'none' }} onClick={handleClick}>
                  <a href={link.path} style={{ color: 'gold' }}>
                    {link.text}
                  </a>
                </button>

              </li>
            ))}
          </ul>
        </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;
