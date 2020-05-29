import React from 'react';
import '../App.css';
import './AboutUsStyle/AboutUs.css'

export default function AboutUs() {
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
            <p className="content-text about-tabs__text">CBD is short for cannabidiol. It is a phytocannabinoid found in hemp and known for supporting the body and mind in many ways.* Charlotte’s Web products have cannabinoids with CBD extract.</p>
            <p className="content-text about-tabs__text">Not to be confused with oil from hemp seeds (which doesn’t contain cannabinoids), CBD comes from the flowers and leaves of the hemp plant.</p>
            <p className="content-text about-tabs__text">Why does CBD work? The human body has a vast network of receptors, the endocannabinoid system.</p>
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
                <p className="content-text about-tabs__text">Erat velit scelerisque in dictum. Amet nulla facilisi morbi tempus iaculis urna id. Mattis pellentesque id nibh tortor id aliquet lectus. Integer feugiat scelerisque varius morbi enim nunc faucibus a.</p>
                <p className="content-text about-tabs__text">Pulvinar pellentesque habitant morbi. Nulla facilisi morbi tempus iaculis urna id. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Id faucibus nisl tincidunt eget nullam. Ornare massa eget egestas purus viverra accumsan in nisl.</p>
                <p className="content-text about-tabs__text">Pretium aenean pharetra magna ac. Sed sed risus pretium quam vulputate dignissim suspendisse. Tortor posuere ac ut consequat semper. Ac odio tempor orci dapibus. </p>
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
                <p className="content-text about-tabs__text">Odio euismod lacinia at quis risus. Praesent tristique magna sit amet purus gravida quis blandit.</p>
                <p className="content-text about-tabs__text">Netus et malesuada fames ac turpis egestas integer eget aliquet. In arcu cursus euismod quis viverra nibh. Tristique senectus et netus et malesuada. Metus aliquam eleifend mi in nulla posuere.</p>
                <p className="content-text about-tabs__text">Dolor purus non enim praesent elementum. Lacinia quis vel eros donec ac. Volutpat sed cras ornare arcu dui vivamus. Enim nec dui nunc mattis enim ut tellus elementum. </p>
            </div>
            <div className="about-tabs__images">
                <img src="./img/about-us5.jpg" className="about-tabs__img" alt="about_us" />
                <img src="./img/about-us6.png" className="about-tabs__img" alt="about_us" />
            </div>
        </React.Fragment>
    }
}