import React from 'react';
import '../App.css';
import './FaqStyle/Faq.scss';
import { useState } from 'react'

export default function Faq(props) {
    const [activeItem, setActiveItem] = useState(2)
    function actionClick(key) {
        setActiveItem(key)
    }
    let faqItems = [];
    questions.map(e => {
        if (activeItem === e.id) return faqItems.push(<FaqItem question={e.q} id={e.id} answer={e.a} key={e.id} action={actionClick} elClass="faq__answer faq__answer--active" />)
        else return faqItems.push(<FaqItem question={e.q} answer={e.a} key={e.id} id={e.id} action={actionClick} elClass="faq__answer" />)
    })
    return <div className="faq">
        <h3 className="page-title faq__title">frequently asked questions</h3>
        <div className="faq__block">
            {faqItems}
        </div>
    </div>
}
function FaqItem(props) {
    function click() {
        console.log(props.id)
        props.action(props.id)
    }
    return <div className="faq__container">
        <div className="faq__question content-text content-text--faq" onClick={click}>
            <img src="./img/plus.png" alt="PLUS" className="faq__open" /> {props.question}
        </div>
        <div className={props.elClass}>
            {props.answer}
        </div>
    </div>
}
let questions = [

    { q: " Is Hemp-Derived Cannabidiol (CBD) Legal? ", a: "Namely, hemp comes with high concentrations of cannabidiol (CBD), the non-psychoactive cannabinoid, but it carries almost no THC (below 0.3%). It's the THC content that gives marijuana its psychoactive effects.", id: 1 },
    { q: " What is Cannabidiol (CBD)? ", a: "Because CBD from hemp has no psychoactive effects, the purchase, sales, or possession of hemp CBD products are completely legal in all 50 States. ", id: 2 },
    { q: " Are there any negative side effects? ", a: "Even a critical review by the World Health Organization (WHO) recently reported that CBD is a promising treatment for a number of medical conditions, is well tolerated, has a good safety profile, and doesn't appear to be a risk for abuse, dependence, or other public-health related problems.", id: 3 },
    { q: "  Do you offer a return policy?", a: "Return policies are the rules retail merchants establish to manage the process by which customers return or exchange unwanted or defective merchandise that they have purchased previously. Return policies are an extension of the customer service retailers provide; they tend to be fairly liberal as a consequence", id: 4 },
]