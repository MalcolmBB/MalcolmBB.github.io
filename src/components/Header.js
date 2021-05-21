import React from 'react';

function Header(){
    return (
        <header>
            <div className="logo">
                <a href="Home" className="headerHeader">&lt;Malcolm Baatjies/&gt;</a>
                <div className="headerButtons">
                        <a href="Home" className="button bAbout">&lt;About/&gt;</a>
                        <a href="Home" className="button bWork">&lt;Past Work/&gt;</a>
                        <a href="Home" className="button bContact">&lt;Contact Me!/&gt;</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
