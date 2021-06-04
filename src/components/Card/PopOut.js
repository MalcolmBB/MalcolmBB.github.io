import React from 'react';
import Card from './Card';
import {Slide} from 'react-awesome-reveal';
import './PopOut.css';

var dir;

function PopOut({cards, sideKey, classes="PopOut", startSide = "startLeft"}){
    if (sideKey % 2 === 0){
        classes += " popRight";
        dir = "right";
    }
    else{
        classes += " popLeft";
        dir = "left";
    }
    classes += " " + startSide;
    return (
        <Slide
            triggerOnce
            duration={1200}
            cascade
            damping={1}
            direction={dir}
            fraction={0.5}
            >
            <div className={classes}>
                {cards.map((card, key) => (
                    <Card
                        key={key}
                        type={card.type}
                        Title={card.Title}
                        subTitle={card.subTitle}
                        imgSrc={card.imgSrc}
                        imgAlt={card.imgAlt}
                        paragraph={card.paragraph}
                        animKey={key}
                    ></Card>
                ))}
            </div>
        </Slide>
    );
}

export default PopOut;
