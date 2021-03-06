import React, {useState} from 'react';
import Button from '../Button/Button.js';
import $ from 'jquery';
import './Header.css'

const headerButtonsList = [
    {
        type: "NavigationHeader",
        className: "button bHome header",
        linkTo: "/Home",
        value: "Home"
    },
    {
        type: "NavigationHeader",
        className: "button bAbout header",
        linkTo: "/About",
        value: "About"
    },
    {
        type: "NavigationHeader",
        className: "button bWork header",
        linkTo: "/Past-work",
        value: "Past Work"
    }
    ,
    {
        type: "NavigationHeader",
        className: "button bContact header",
        linkTo: "/Contact-me",
        value: "Contact Me!"
    }
]


function Header(){
    const [isOpened, setOpened] = useState(false);

    const toggleOpen = () => {
        setOpened(!isOpened);
    };

    const clickThing = () => {
        setOpened(false);
        $('.simplebar-content-wrapper')[0].scroll({top: 0, left: 0, behavior: 'smooth'})
        document.activeElement.blur();
    };

    return (
        <header>
            <div className="logo">
                    <Button
                        type= "Navigation"
                        className="headerHeader"
                        linkTo="/Home"
                        value="Malcolm Baatjies"
                        onClick={clickThing}
                    ></Button>
                <div
                    className={isOpened ? "menuButton showMenu opened":"menuButton hideMenu"}
                    onClick={toggleOpen}>
                    <svg width="100" height="100" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                    </svg>
                </div>
                <div className="headerButtons">
                        {headerButtonsList.map(bButton => (
                            <Button
                                key={bButton.className}
                                type={bButton.type}
                                className={bButton.className}
                                linkTo={bButton.linkTo}
                                value={bButton.value}
                                onClick={clickThing}
                            ></Button>
                        ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
