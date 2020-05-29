import React from 'react';
import './App.css';
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Faq from './components/Faq'
import Feedback from './components/Feedback'

export let searchIcon = <img src="./img/search.svg" alt="search" />;
export let buttonLine = <div className="button-line"></div>;
export let headerArrow = <img src="./img/header-arrow.svg" alt="arrow" />
export let headerBottomText = (
  <div className="header-line">
    <div className="header-line__line"></div>
    <p className="header-line__text">Cbd potion health</p>
  </div>)

function CBD() {
  return <div className="wrapper">
    <Header />
    <AboutUs />
    <Products />
    <Faq />
    <Feedback />
  </div>
}
export default CBD;
