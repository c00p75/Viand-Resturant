import React from 'react';
import { MenuItem, SubHeading } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="App__specialMenu-title mb-md-5 text-center">
      <SubHeading title="Menu that fits your pallete" />
      <h1 className="headtext__cormorant">Today&apos;s special</h1>
    </div>

    <div className="app__specialMenu-menu d-flex flex-column flex-md-row my-4">
      <div className="app__specialMenu_menu-wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & beer</p>
        <div className="app__specialMenu_menu-items">
          {data.wines.map((wine) => (
            <MenuItem
              key={data.wines.indexOf(wine)}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img d-flex justify-content-center align-items-center">
        <img src={images.menu} alt="menu img" loading="lazy" />
      </div>

      <div className="app__specialMenu_menu-cocktails flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu-items">
          {data.cocktails.map((cocktail) => (
            <MenuItem
              key={data.cocktails.indexOf(cocktail)}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="mt-5">
      <button type="button" className="custom__button" data-bs-toggle="modal" data-bs-target="#RegularMenu">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
