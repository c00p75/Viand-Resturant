import React from 'react';

import { Navbar } from './components';
import BookTable from './components/BookTable/BookTable';
import './App.css';
import {
  AboutUs, Header, SpecialMenu, Chef, Intro, Gallery, FindUs, Footer,
} from './container';
import RegularMenu from './container/Menu/RegularMenu';

const App = () => (
  <div>
    <Navbar />
    <BookTable />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <RegularMenu />
    <Chef />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
