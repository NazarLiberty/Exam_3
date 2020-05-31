import React, { useState } from 'react';
import '../App.scss';
import './HeaderStyle/Header.scss'
import { searchIcon, buttonLine, headerArrow, headerBottomText } from '../App'
export default function Header() {
    const [active, setActive] = useState(false);
    let activePageNav = "nav__page";
    let activeUserNav = "nav__user";
    function toggleMenu() {
        setActive(!active)
    }
    if (active) activePageNav += " nav__page--active"
    if (active) activeUserNav += " nav__user--active"
    return (
        <div className="header">
            <div className="header__filter">
                <nav className="nav">
                    <div className={activePageNav}>
                        <NavItem text='home' />
                        <NavItem text="products" />
                        <NavItem text="faqs" />
                        <NavItem text="contact us" />

                    </div>
                    <div className="nav__logo">
                        CBD
                  </div>
                    <div className={activeUserNav}>
                        <NavButton text="Login" />
                        <NavButton text="Search" icon={searchIcon} />
                        <NavButton text="Cart" ammount="(0)" />

                    </div>
                    <NavButtonMobile text="PPP" action={toggleMenu} />
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
            {props.text}
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
            <button className="header__button button-text">start shopping {buttonLine}</button>
            <p className="header__subtitle header__subtitle--small">See all products {headerArrow}</p>
        </div>
    )
}