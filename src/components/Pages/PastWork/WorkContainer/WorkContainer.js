import React from 'react';
import Button from '../../../Button/Button';
import {Slide} from 'react-awesome-reveal';
import "./WorkContainer.css"

var enterDir;

function WorkContainer({
    type,
    sideKey,
    Title,
    imgSrc,
    imgAlt,
    paragraph,
    buttonClassName,
    buttonLinkTo,
    buttonType="Link",
    buttonValue="View GitHub repository",
    classes ="ExteriorContainer"
}) {
    if (type === "mainAbout") {
        classes += " Left MainAbout";
        buttonType="Navigation";
        buttonValue="More about me!";
    }
    else {
        if (sideKey % 2 === 0) {
            classes += " Right";
            enterDir="right";
        } else {
            classes += " Left";
            enterDir="left";
        }
        if (type === "mainWork") {
            classes += " MainWork";
            buttonClassName += " invert";
        }
    }
    return(
        <Slide
            triggerOnce
            duration={1200}
            direction={enterDir}
            fraction={0.7}
            >
            {Work({
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
        </Slide>)
}

function Work({
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
    if (classes.includes("Right")){
        return (<div className={classes}>
            <h2>{Title}</h2>
            <div className="ContentContainer">
                <div className="SummaryContainer">
                    <p>{paragraph}</p>
                    <Button type={buttonType} className={buttonClassName} linkTo={buttonLinkTo} value={buttonValue}></Button>
                </div>
                <img src={imgSrc} alt={imgAlt}/>
            </div>
        </div>);
    }
    else{
        return (<div className={classes}>
            <h2>{Title}</h2>
            <div className="ContentContainer">
                <img src={imgSrc} alt={imgAlt}/>
                <div className="SummaryContainer">
                    <p>{paragraph}</p>
                    <Button type={buttonType} className={buttonClassName} linkTo={buttonLinkTo} value={buttonValue}></Button>
                </div>
            </div>
        </div>);
    }
}

export default WorkContainer;
