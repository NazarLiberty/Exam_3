import React from 'react';
import '../App.css';
import './FooterStyle/Footer.css'

let footerLineHorizontal = <div className="footer__line-h"></div>
let footerLineVertical = <div className="footer__line-v"></div>
export default function Footer() {
    return <div className="footer">
        <div className="footer__info">{footerLineHorizontal}
            <div className="footer__info-inner">
                <p className="footer__text">privacy policy </p>
                <p className="footer__text">terms of use </p>
                <p className="footer__text">return policy </p>
            </div>
        </div>
        <div className="footer__contacts">
            <div className="footer__logo">CBd</div>
            <div className="footer__social">
                <img src="img/Facebook.png" />
                <img src="img/Twitter.png" />
                <img src="img/YouTube.png" />
            </div>
            {footerLineVertical}
            <form className="footer__form">
                <h3 className="footer__title">
                    subscribe to newsletter
                </h3>
                <div className="footer__input-block">
                    <input type="text" className="footer__input" placeholder="Email" />
                    <button type="submit" className="footer__submit"> <img src="./img/footer_arrow.svg" /></button>
                </div>
            </form>
            <div className="footer__copy">© 2018. CbD health.</div>
        </div>
        <div className="footer__info">{footerLineHorizontal}
            <div className="footer__info-inner">
                <p className="footer__text">shipping info </p>
                <p className="footer__text">returns / exchange </p>
                <p className="footer__text">contact </p>
            </div>
        </div>
    </div>
}