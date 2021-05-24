import React from 'react';
import {Link} from 'react-router-dom';
import {Button as MaterialButton} from '@material-ui/core';
import {StylesProvider} from '@material-ui/core/styles';
import "./Button.css"


function Button({type, className, linkTo, value}){
    if (type === "Link"){
        return linkButton({className, linkTo, value});
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
                >
                <span>
                    &lt;{value}/&gt;
                </span>
            </MaterialButton>
        </StylesProvider>
    );
}

export default Button;
