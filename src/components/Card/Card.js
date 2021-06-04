import React from 'react';
import {Slide} from 'react-awesome-reveal';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './Card.css';

var animDirection;

function Card({type, Title, subTitle, imgSrc, imgAlt, paragraph, classes = "Card", animKey}){
    animDirection = "down";

    if (useMediaQuery('only screen and (width<768px)')){
        if (Math.random() < 0.5){
            animDirection = "right";
        }
        else{
            animDirection = "left";
        }
    }
    if (type === "Picture"){
        classes += " Picture"
        return (
            <Slide
                triggerOnce
                duration={1200}
                delay={350}
                direction={animDirection}
                fraction={0.8}
                >
                <div className={classes}>
                    <h3>{Title}</h3>
                    <h4>{subTitle}</h4>
                    <img src={imgSrc} alt={imgAlt}/>
                    <div>
                        {paragraph.map((par) => (
                        <p style={{whiteSpace:"pre-line",}}>
                            {par}
                        </p>
                        ))}
                    </div>
                </div>
            </Slide>
        )
    }
    else if (type === "Empty"){
        classes += " Empty"
        return (
            <Slide
                triggerOnce
                duration={1200}
                delay={350}
                direction={animDirection}
                fraction={0.8}
                >
                <div className={classes}>
                    <h3>{Title}</h3>
                    <h4>{subTitle}</h4>
                        <div>
                            {paragraph.map((par) => (
                            <p style={{whiteSpace:"pre-line",}}>
                                {par}
                            </p>
                            ))}
                        </div>
                </div>
            </Slide>
        )
    }
    return (
        <Slide
            triggerOnce
            duration={1200}
            delay={350}
            direction={animDirection}
            fraction={0.8}
            >
            <div className={classes}>
                <h3>{Title}</h3>
                <h4>{subTitle}</h4>
                    <div>
                        {paragraph.map((par) => (
                        <p style={{whiteSpace:"pre-line",}}>
                            {par}
                        </p>
                        ))}
                    </div>
            </div>
        </Slide>
    )
}


export default Card;
