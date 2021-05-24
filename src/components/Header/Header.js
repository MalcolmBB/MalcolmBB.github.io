import React from 'react';
import Button from '../Button/Button.js';
import './Header.css'

const headerButtons = [
    {
        type: "Navigation",
        className: "button bAbout",
        linkTo: "/About",
        value: "About"
    },
    {
        type: "Navigation",
        className: "button bWork",
        linkTo: "/Past_Work",
        value: "Past Work"
    }
    ,
    {
        type: "Navigation",
        className: "button bContact",
        linkTo: "/Contact",
        value: "Contact Me!"
    }
]

function Header(){
    return (
        <header>
            <div className="logo">
                    <Button
                        type= "Navigation"
                        className="headerHeader"
                        linkTo="/Home"
                        value="Malcolm Baatjies"
                    ></Button>
                <div className="headerButtons">
                        {headerButtons.map(bButton => (
                            <Button
                                key={bButton.className}
                                type={bButton.type}
                                className={bButton.className}
                                linkTo={bButton.linkTo}
                                value={bButton.value}
                            ></Button>
                        ))}
                </div>
            </div>
        </header>
    );
}

export default (Header);
