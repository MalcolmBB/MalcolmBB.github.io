import React from 'react';
import {Slide} from 'react-awesome-reveal';
import "./AboutContent.css"

var dir;

function AboutContent({type="Text", sideKey=0, Title="Placeholder", imgSrc, imgAlt, paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", classes="aboutContentExterior"}) {
    if (sideKey % 2 === 0){
        classes += " Left";
        dir = "left";
    }
    else{
        classes += " Right";
        dir = "right";
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
        return(defaultPictureAboutContent({Title, paragraph, imgSrc, imgAlt, classes}));
    }
}

function defaultTextOnlyAboutContent({Title, paragraph, classes}){
    return (
        <div className={classes}>
            <h2>{Title}</h2>
            <div>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}

function defaultPictureAboutContent({Title, paragraph, imgSrc, imgAlt, classes}){
    if (classes.includes("Left")){
        return (
            <div className={classes}>
                <h2>{Title}</h2>
                <div>
                    <img src={imgSrc} alt={imgAlt}/>
                    <p>{paragraph}</p>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={classes}>
                <h2>{Title}</h2>
                <div>
                    <p>{paragraph}</p>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
            </div>
        );
    }
}

export default AboutContent;
