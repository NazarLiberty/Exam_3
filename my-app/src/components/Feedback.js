import React from 'react';
import '../App.scss';
import './FeedbackStyle/Feedback.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import '../components/ProductsStyle/Products.css'
import { buttonLine } from '../App'

let getFuckOffReactUniqueKey = 1;

export default function Feedback() {
    return <div className="feedback">
        <FeedbackSlider />
    </div>
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <img src="./img/right_feedback.png"
            className='feedback__next-arrow'
            onClick={onClick}
            alt="arrow"
        />
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <img src="./img/left_feedback.png"
            className='feedback__prev-arrow'
            onClick={onClick}
            alt="arrow"
        />
    );
}
function FeedbackSlider() {
    const settings = {
        draggable: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return (
        <div className="feedback__slider">
            <Slider {...settings}>
                <FeedbackItem name="mark j." rate={5} text="I have tried another product after using this one successfully, and I am Back for good! The flavour, the lightness of the oil and the health benefits I have gotten with this oil are amazing!" />
                <FeedbackItem name="noah G." rate={4} text="I was wonder how perfect flowers are in real look. Awesome, as always, best shop in my opinion!" />
                <FeedbackItem name="diego b." rate={5} text="This catalog makes me just fall in wishes to buy and try yours stuff again. Best of the best!" />
            </Slider>
        </div>
    );
}
function FeedbackItem(props) {
    let rateStars = [];
    for (let i = 0; i < props.rate; i++) {
        rateStars.push(<img src="img/star_feedback.svg" alt="star" className="feedback__star" key={getFuckOffReactUniqueKey++} />)
    }
    return <div className="feedback__item">
        <div className="feedback__content">
            <div className="feedback__stars">
                {rateStars}
            </div>
            <div className="feedback__text">{props.text}</div>
            <div className="feedback__text feedback__text--name">{buttonLine} {props.name} </div>
        </div>
    </div>
}