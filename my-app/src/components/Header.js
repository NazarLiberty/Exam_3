import React, { useState } from 'react';
import '../App.scss';
import './HeaderStyle/Header.scss'
import { searchIcon, buttonLine, headerArrow, headerBottomText } from '../App'
export default function Header() {
    const [active, setActive] = useState(false);
    const [activeScroll, setActiveScroll] = useState(false)
    let activePageNav = "nav__page";
    let activeUserNav = "nav__user";
    function toggleMenu() {
        setActive(!active)
    }
    if (active) activePageNav += " nav__page--active"
    if (active) activeUserNav += " nav__user--active"

    function scroll() {
        window.addEventListener('scroll', (e) => {
            let pageY = window.pageYOffset
            let headerHeight = document.getElementById('header').getBoundingClientRect().height
            if (headerHeight < pageY) setActiveScroll(true)
            else setActiveScroll(false)
        });
    }
    let navScroll = "nav";
    if (activeScroll) navScroll += " nav--active"
    scroll()
    function scrollToHome() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function scrollToProducts() {
        window.scrollTo({
            top: window.pageYOffset + document.getElementById('products').getBoundingClientRect().top,
            behavior: "smooth"
        });
    }
    function scrollToFaq() {
        window.scrollTo({
            top: window.pageYOffset + document.getElementById('faq').getBoundingClientRect().top,
            behavior: "smooth"
        });
    }
    function scrollToContacts() {
        console.log(document.getElementById('contacts').getBoundingClientRect().top)
        window.scrollTo({
            top: window.pageYOffset + document.getElementById('contacts').getBoundingClientRect().top,
            behavior: "smooth"
        });
    }
    return (
        <div className="header" id="header">
            <div className="header__filter">
                <nav className={navScroll} id="nav">
                    <div className={activePageNav}>
                        <NavItem text='home' action={scrollToHome} />
                        <NavItem text="products" action={scrollToProducts} />
                        <NavItem text="faqs" action={scrollToFaq} />
                        <NavItem text="contact us" action={scrollToContacts} />

                    </div>
                    <div className="nav__logo">
                        CBD
                  </div>
                    <div className={activeUserNav}>
                        <NavButton text="Login" />
                        <NavButton text="Search" icon={searchIcon} />
                        <NavButton text="Cart" ammount="(0)" />

                    </div>
                    <NavButtonMobile action={toggleMenu} />
                </nav>
                <div className="header__container">
                    <HeaderText />
                </div>
                {headerBottomText}
            </div>
        </div>
    )
}
function NavButtonMobile(props) {
    return (
        <div className="nav__mobile" onClick={props.action}>
            <img src="./img/menu1.png" className="nav__burger" />
        </div>
    )
}
function NavItem(props) {
    return (
        <div className="nav__item" onClick={props.action}>
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
            <button className="header__button button-text" >start shopping {buttonLine}</button>
            <p className="header__subtitle header__subtitle--small">See all products {headerArrow}</p>
        </div>
    )
}