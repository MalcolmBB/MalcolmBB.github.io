import React from 'react';
// import {Link} from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css';

const socialLinks = [
    {
        type: "Link",
        className: "button bInstagram",
        linkTo: "https://www.instagram.com/",
    },
    {
        type: "Link",
        className: "button bWork",
        linkTo: "/Past_Work",
    }
    ,
    {
        type: "Link",
        className: "button bContact",
        linkTo: "/Contact",
    }
]

function Footer(){
    return (
        <footer>
                <div className="ContactContainer">
                        <h4>Contact me!</h4>
                        <label htmlFor="userName">Name:</label>
                        <input type="text" name="userName" placeholder="First name"/>
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email" placeholder="Email Address"/>
                        <textarea name="userMessage" rows="8" cols="80" placeholder="Enter message here"></textarea>
                        <input type="button" name="sendMessage" value="Send Message"/>
                </div>
                <div className="socialLinks">
                    <Button
                        type="Link"
                        className="button bInstagram"
                        linkTo="https://www.instagram.com/"
                        value="">
                    </Button>
                </div>
        </footer>
    );
}

export default Footer;
