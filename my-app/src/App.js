import React, { Component } from 'react';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

let searchIcon = <img src="./img/search.svg" alt="search" />;
let buttonLine = <div className="button-line"></div>;
let headerArrow = <img src="./img/header-arrow.svg" alt="arrow" />
let headerBottomText = <div className="header-line">
  <div className="header-line__line"></div>
  <p className="header-line__text">Cbd potion health</p>
</div>
function CBD() {
  return <div className="wrapper">
    <Header />
    <AboutUs />
    <Products />
    <SimpleSlider />
  </div>
}

function Header() {
  return (
    <div className="header">
      <div className="header__filter">
        <nav className="nav">
          <div className="nav__page">
            <NavItem text='home' />
            <NavItem text="products" />
            <NavItem text="faqs" />
            <NavItem text="contact us" />
          </div>
          <div className="nav__logo">
            CBD
                </div>
          <div className="nav__user">
            <NavButton text="Login" />
            <NavButton text="Search" icon={searchIcon} />
            <NavButton text="Cart" ammount="(0)" />
          </div>
        </nav>
        <div className="header__container">
          <HeaderText />
        </div>
        {headerBottomText}
      </div>
    </div>
  )
}
function NavItem(props) {
  return (
    <div className="nav__item">
      {props.text}
    </div>
  )
}
function NavButton(props) {
  return <div className="nav__button">
    <span className="nav__icon">{props.icon}</span> {props.text} {props.ammount}
  </div>
}
function HeaderText() {
  return (
    <div className="header__text-block">
      <p className="header__title">Enhancing Life
            Excelling in Care</p>
      <p className="header__subtitle">
        Choose Wisely. Choose CBD.</p>
      <button className="header__button">start shopping {buttonLine}</button>
      <p className="header__subtitle header__subtitle--small">See all products {headerArrow}</p>
    </div>
  )
}

// 
// 
// 

function AboutUs() {
  return <div className="about-us">
    <LogosBlock />
    <AboutTabs />
  </div>
}
function LogosBlock() {

  return <div className="logos-block">
    <img src="./img/Holder.png" alt="frame" />
    <div className="logos-block__content">
      <p className="about-us__title">WE are what we are</p>
      <img src="./img/logos.png" alt="logos" />
    </div>
  </div>
}
function AboutTabs() {
  const [tab, setTab] = React.useState(1)
  const [activeFirst, setActiveFirst] = React.useState(true)
  const [activeSecond, setActiveSecond] = React.useState(false)
  const [activeThird, setActiveThird] = React.useState(false)
  function tabFirst() {
    setTab(1)
    setActiveFirst(true)
    setActiveSecond(false)
    setActiveThird(false)
  }
  function tabSecond() {
    setTab(2)
    setActiveFirst(false)
    setActiveSecond(true)
    setActiveThird(false)
  }
  function tabThird() {
    setTab(3)
    setActiveFirst(false)
    setActiveSecond(false)
    setActiveThird(true)
  }

  return (
    <div className="about-tabs">
      <div className="about-tabs__tabs page-title">
        <TabsItem text="what is cbd" action={tabFirst} active={activeFirst} />
        <TabsItem text="benefits" action={tabSecond} active={activeSecond} />
        <TabsItem text="our difference" action={tabThird} active={activeThird} />
      </div>
      <div className="about-tabs__content">
        <TabsContent tab={tab} />
      </div>
    </div>
  )
}
function TabsItem(props) {
  if (props.active) return <div className="about-tabs__item about-tabs__item--active" onClick={props.action}>{props.text}</div>
  else return <div className="about-tabs__item" onClick={props.action}>{props.text}</div>
}
function TabsContent(props) {
  if (props.tab === 1) return <React.Fragment>
    <div className="about-tabs__info">
      <p className="about-us__title about-us__title--left">how it is and how it works</p>
      <p className="about-tabs__text">CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.</p>
      <p className="about-tabs__text">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.</p>
      <p className="about-tabs__text">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.</p>
    </div>
    <div className="about-tabs__images">
      <img src="./img/about-us1.png" className="about-tabs__img" alt="about_us" />
      <img src="./img/about-us2.png" className="about-tabs__img" alt="about_us" />
    </div>
  </React.Fragment>
  if (props.tab === 2) {
    return <React.Fragment>
      <div className="about-tabs__info">
        <p className="about-us__title about-us__title--left">how it is and how it works</p>
        <p className="about-tabs__text">CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.</p>
        <p className="about-tabs__text">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.</p>
        <p className="about-tabs__text">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.</p>
      </div>
      <div className="about-tabs__images">
        <img src="./img/about-us3.jpg" className="about-tabs__img" alt="about_us" />
        <img src="./img/about-us4.jpg" className="about-tabs__img" alt="about_us" />
      </div>
    </React.Fragment>
  }
  if (props.tab === 3) {
    return <React.Fragment>
      <div className="about-tabs__info">
        <p className="about-us__title about-us__title--left">how it is and how it works</p>
        <p className="about-tabs__text">CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.</p>
        <p className="about-tabs__text">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.</p>
        <p className="about-tabs__text">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.</p>
      </div>
      <div className="about-tabs__images">
        <img src="./img/about-us5.jpg" className="about-tabs__img" alt="about_us" />
        <img src="./img/about-us6.png" className="about-tabs__img" alt="about_us" />
      </div>
    </React.Fragment>
  }
}

function Products() {
  return <div className="container">
    <div className="products">
      <h2 className="page-title">CBD featured products</h2>

    </div>
  </div>
}




class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="test">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CBD;
