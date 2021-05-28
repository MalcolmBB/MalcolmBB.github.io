import React from 'react';
import {Link} from 'react-router-dom';
import {Button as MaterialButton} from '@material-ui/core';
import {SocialIcon} from 'react-social-icons';
import {StylesProvider} from '@material-ui/core/styles';
import "./Button.css"


function Button({type, className, linkTo, value, linePos, onClick}){
    if (linePos != null){
        className += " " + linePos;
    }
    else {
        className += " leftLine";
    }
    if (type === "Link"){
        if (value === ""){
            return linkButtonEmpty({className, linkTo, linePos});
        }
        else{
            return linkButton({className, linkTo, value, linePos});
        }
    }
    else if (type === "Navigation"){
        return navButton({className, linkTo, value, linePos});
    }
    else if (type === "Submit"){
        return submitButton({className, value, linePos, onClick});
    }
}

function submitButton({className, value, linePos, onClick}){
    return (
        <StylesProvider injectFirst>
            <MaterialButton
                className={className}
                disableFocusRipple={true}
                disableRipple={true}
                onClick={onClick}
                >
                <span>
                    &lt;{value}/&gt;
                </span>
            </MaterialButton>
        </StylesProvider>
    );
}

function navButton({className, linkTo, value, linePos}){
    return (
        <StylesProvider injectFirst>
            <MaterialButton
                className={className}
                onClick={() => {
                    window.scroll({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                    });
                }}
                component={Link}
                to={linkTo}
                disableFocusRipple={true}
                disableRipple={true}
                >
                <span>
                    &lt;{value}/&gt;
                </span>
            </MaterialButton>
        </StylesProvider>
    );
}

function linkButton({className, linkTo, value, linePos}){
    return (
        <StylesProvider injectFirst>
            <MaterialButton
                className={className}
                onClick={() => {
                    document.activeElement.blur();
                }}
                href={linkTo}
                target="_blank"
                disableFocusRipple={true}
                disableRipple={true}
                endIcon={<SocialIcon url={linkTo} tabIndex="-1" bgColor="transparent" fgColor="var(--iconColor)"/>}
                >
                <span>
                    &lt;{value}/&gt;
                </span>
            </MaterialButton>
        </StylesProvider>
    );
}

function linkButtonEmpty({className, linkTo, linePos}){
    return (
        <StylesProvider injectFirst>
            <MaterialButton
                className={className}
                onClick={() => {
                    document.activeElement.blur();
                }}
                href={linkTo}
                target="_blank"
                disableFocusRipple={true}
                disableRipple={true}
                >
                <SocialIcon url={linkTo} tabIndex="-1" bgColor="transparent" fgColor="var(--iconColor)" style={{width:"4rem", height:"4rem", padding:0}}/>
            </MaterialButton>
        </StylesProvider>
    );
}

export default Button;
