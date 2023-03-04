import React from 'react';

import { Navbar } from './components';
import './App.css';
import {
  AboutUs, Header, SpecialMenu, Chef, Intro, Gallery,
} from './container';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    {/* <FindUs /> */}
    {/* <Footer /> */}
  </div>
);

export default App;
