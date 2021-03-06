import React from 'react';
import Button from '../../../Button/Button';
import PopOut from '../../../Card/PopOut';
import {Slide} from 'react-awesome-reveal';
import "./AboutContent.css"

var dir;
var shift = 0;
var threeCards = [];
var temp = [];
var startSide;

function AboutContent({type="Text", sideKey=0, Title="Placeholder", imgSrc, imgAlt, paragraph="-EmptyThingy-", cards, classes="aboutContentExterior", buttonClassName, buttonLinkTo, buttonValue, buttonType}) {
    if (sideKey % 2 === 0){
        classes += " Left";
        startSide = "startLeft";
        dir = "left";
        shift = 0;
    }
    else{
        classes += " Right";
        startSide = "startRight";
        dir = "right";
        shift = 1;
    }
    if (type === "Text"){
        return(
            <Slide
                triggerOnce
                duration={1200}
                direction={dir}
                fraction={0.5}
                >
                    {defaultTextOnlyAboutContent({Title, paragraph, classes})}
            </Slide>
        );
    }
    else if (type === "Picture"){
        classes += " Picture";
        return(
            <Slide
                triggerOnce
                duration={1200}
                direction={dir}
                fraction={0.5}
                >
                    {defaultPictureAboutContent({Title, paragraph, imgSrc, imgAlt, classes})}
            </Slide>
        );
    }
    else if (type === "Button"){
        classes = "MainAbout";
        dir="left";
        return(
            <Slide
                triggerOnce
                duration={1200}
                direction={dir}
                fraction={0.5}
                >
                {buttonAboutContent({
                    Title,
                    imgSrc,
                    imgAlt,
                    paragraph,
                    buttonClassName,
                    buttonLinkTo,
                    buttonValue,
                    buttonType,
                    classes
                })}
            </Slide>
        );
    }
    else if (type === "Card"){
        classes += " cardsContainer"
        return (
            <Slide
                triggerOnce
                duration={1000}
                direction={dir}
                cascade
                damping={1}
                fraction={0.05}
                >
                {cardsAboutContent({
                Title,
                paragraph,
                classes,
                cards,
                })}
            </Slide>
        );
    }
}

function defaultTextOnlyAboutContent({Title, paragraph, classes}){
    return (
        <div className={classes}>
            <h2>{Title}</h2>
            <div>
                {paragraph.map((par, key) => (
                    <p key={key} style={{whiteSpace:"pre-line",}}>
                        {par}
                    </p>
                ))}
            </div>
        </div>
    );
}

function buttonAboutContent({
    Title,
    imgSrc,
    imgAlt,
    paragraph,
    buttonClassName,
    buttonLinkTo,
    buttonValue,
    buttonType,
    classes
}) {
    return (<div className={classes}>
        <h2>{Title}</h2>
        <div className="ContentContainer">
            <img src={imgSrc} alt={imgAlt}/>
            <div className="SummaryContainer">
                <div>
                    {paragraph.map((par, key) => (
                    <p key={key} style={{whiteSpace:"pre-line",}}>
                        {par}
                    </p>
                    ))}
                </div>
                <Button type={buttonType} className={buttonClassName} linkTo={buttonLinkTo} value={buttonValue}></Button>
            </div>
        </div>
    </div>);
}

function defaultPictureAboutContent({Title, paragraph, imgSrc, imgAlt, classes}){
    if (classes.includes("Left")){
        return (
            <div className={classes}>
                <h2>{Title}</h2>
                <div>
                    <img src={imgSrc} alt={imgAlt}/>
                        {paragraph.map((par, key) => (
                            <p key={key} style={{whiteSpace:"pre-line",}}>
                                {par}
                            </p>
                        ))}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={classes}>
                <h2>{Title}</h2>
                <div>
                    {paragraph.map((par, key) => (
                        <p key={key} style={{whiteSpace:"pre-line",}}>
                            {par}
                        </p>
                    ))}
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
            </div>
        );
    }
}

function cardsAboutContent({Title, paragraph, classes, cards}){
    threeCards = [];
    cards.forEach((card) => {
        temp.push(card);
        if ((temp.length === 3) || (cards.indexOf(card) === cards.length - 1)){
            threeCards.push(temp)
            temp = []
        }
    })
    if (paragraph === "-EmptyThingy-"){
        return (
            <div className={classes}>
                <h2>{Title}</h2>
                {threeCards.map((card, key) => (
                    <PopOut cards={card} sideKey={key + shift} startSide={startSide}></PopOut>
                ))}
            </div>
        );
    }
    return (
        <div className={classes}>
            <h2>{Title}</h2>
                <div>
                    {paragraph.map((par, key) => (
                    <p key={key} style={{whiteSpace:"pre-line",}}>
                        {par}
                    </p>
                    ))}
                </div>
                <br></br>
                <br></br>
            {threeCards.map((card, key) => (
                <PopOut key={key} cards={card} sideKey={key + shift} startSide={startSide}></PopOut>
            ))}
        </div>
    );
}

export default AboutContent;
