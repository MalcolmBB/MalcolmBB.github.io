import React from 'react';
import {Slide} from 'react-awesome-reveal';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './Card.css';

var animDirection;
var animFrac;

function Card({type, Title, subTitle, imgSrc, imgAlt, paragraph, classes = "Card", animKey}){
    animDirection = "down";
    animFrac = 0.8;
    if (useMediaQuery('only screen and (max-width:768px)')){
        if (Math.random() < 0.5){
            animDirection = "right";
        }
        else{
            animDirection = "left";
        }
        animFrac=0.4;
    }
    if (type === "Picture"){
        classes += " Picture";
        return (
            <Slide
                triggerOnce
                duration={1200}
                delay={350}
                direction={animDirection}
                fraction={animFrac}
                >
                <div className={classes}>
                    <h3>{Title}</h3>
                    <h4>{subTitle}</h4>
                    <img src={imgSrc} alt={imgAlt}/>
                    <div>
                        {paragraph.map((par, key) => (
                        <p key={key} style={{whiteSpace:"pre-line",}}>
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
                fraction={animFrac}
                >
                <div className={classes}>
                    <h3>{Title}</h3>
                    <h4>{subTitle}</h4>
                        <div>
                            {paragraph.map((par, key) => (
                            <p key={key} style={{whiteSpace:"pre-line",}}>
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
            fraction={animFrac}
            >
            <div className={classes}>
                <h3>{Title}</h3>
                <h4>{subTitle}</h4>
                    <div>
                        {paragraph.map((par, key) => (
                        <p key={key} style={{whiteSpace:"pre-line",}}>
                            {par}
                        </p>
                        ))}
                    </div>
            </div>
        </Slide>
    )
}


export default Card;
