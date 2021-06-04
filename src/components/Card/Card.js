import React from 'react';
import {Slide} from 'react-awesome-reveal';
import './Card.css';

var animDelay;

function Card({type, Title, subTitle, imgSrc, imgAlt, paragraph, classes = "Card", animKey}){
    animDelay = 1700 + (500 * animKey);
    if (type === "Picture"){
        return (
            <Slide
                triggerOnce
                duration={1200}
                delay={animDelay}
                direction="down"
                fraction={0.4}
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
    return (
        <Slide
            triggerOnce
            duration={1200}
            delay={animDelay}
            direction="down"
            fraction={0.4}
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
