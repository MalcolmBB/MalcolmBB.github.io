import React from 'react';
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
                    <a href="Home">
                        <img src="" alt="Instagram link"/>
                    </a>
                </div>
        </footer>
    );
}

export default Footer;
