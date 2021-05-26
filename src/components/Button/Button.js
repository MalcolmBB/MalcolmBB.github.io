import React from 'react';
import {Link} from 'react-router-dom';
import {Button as MaterialButton} from '@material-ui/core';
import {SocialIcon} from 'react-social-icons';
import {StylesProvider} from '@material-ui/core/styles';
import "./Button.css"


function Button({type, className, linkTo, value}){
    if (type === "Link"){
        if (value === ""){
            return linkButtonEmpty({className, linkTo});
        }
        else{
            return linkButton({className, linkTo, value});
        }
    }
    else if (type === "Navigation"){
        return navButton({className, linkTo, value});
    }
}

function navButton({className, linkTo, value}){
    return (
        <StylesProvider injectFirst>
            <MaterialButton
                className={className}
                onClick={() => {
                    window.scrollTo(0,0);
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

function linkButton({className, linkTo, value}){
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

function linkButtonEmpty({className, linkTo}){
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
                <SocialIcon url={linkTo} tabIndex="-1" bgColor="transparent" fgColor="var(--iconColor)"/>
            </MaterialButton>
        </StylesProvider>
    );
}

export default Button;
