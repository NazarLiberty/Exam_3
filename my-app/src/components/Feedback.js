import React from 'react';
import '../App.css';
import './FeedbackStyle/Feedback.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import '../components/ProductsStyle/Products.css'

export default function Feedback() {
    return <div className="feedback">
        <FeedbackSlider />
    </div>
}

function FeedbackSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className="feedback__slider">
            <Slider {...settings}>
                <div className="feedback__item"> 1</div>
                <div className="feedback__item">1</div>
                <div className="feedback__item">1</div>
            </Slider>
        </div>
    );
}