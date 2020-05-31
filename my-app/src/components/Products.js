import React from 'react';
import '../App.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import '../components/ProductsStyle/Products.scss'
import { buttonLine } from "../App"
let getFuckOffReactUniqueKey = 1
export default function Products() {
    return <div className="container">
        <div className="products">
            <h2 className="page-title products__title">CBD featured products</h2>
            <ProductsSlider />
        </div>
    </div>
}
function NextArrow(props) {
    const { onClick } = props;
    return (
        <img src="./img/right.png"
            className='products__next-arrow'
            onClick={onClick}
            alt="arrow"
        />
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <img src="./img/left.png"
            className='products__prev-arrow'
            onClick={onClick}
            alt="arrow"
        />
    );
}
function ProductsSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1030,
                settings: {
                    slidesToShow: 2
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
        <div className="products__slider">
            <Slider {...settings}>
                <ProductsItem name="CBD 500 mg Orange Flavor Tincture" src="./img/product1.png" price="49.99" rate={5} />
                <ProductsItem name="Black ICE CBD Muscle Rub 200 mg" src="./img/product2.png" price="49.99" rate={5} />
                <ProductsItem name="CBD+Curcumin Coffee 750 mg" src="./img/product3.png" price="79.99" rate={5} />
                <ProductsItem name="CBD Joint Premium" src="./img/product1.png" price="29.99" rate={3} />
            </Slider>
        </div>
    );
}
function ProductsItem(props) {
    let rateStars = [];
    for (let i = 0; i < props.rate; i++) {
        rateStars.push(<img src="./img/star.svg" alt="star" className="products__star" key={getFuckOffReactUniqueKey++} />)
    }
    return <div className="products__item">
        <div className="products__info">
            <div className="products__stars">

                {rateStars}
            </div>
            <div className="products__name page-title page-title--small">
                {props.name}
            </div>
            <div className="products__img-b">
                <img src={props.src} alt="product" className="products__img" />
            </div>
        </div>
        <div className="products__cart">
            <div className="products__price page-title page-title--small">${props.price} USD</div>
            <div className="products__buy button-text">shop {buttonLine}</div>
        </div>
    </div>
}