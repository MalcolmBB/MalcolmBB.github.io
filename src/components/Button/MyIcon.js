import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


function MyIcon({name=null, link, style}){
    if (name === null){
        name = getNameFromLink(link);
    }

    switch (name) {
        case "Instagram":
            return (<InstagramIcon style={style}/>);
        case "Github":
            return (<GitHubIcon style={style}/>);
        case "Linkedin":
            return (<LinkedInIcon style={style}/>);
        case "Email":
            return (<MailOutlineIcon style={style}/>);
        default:
            return null;
    }
}

function getNameFromLink(link){
    var tempName;
    tempName = link.replace(/.+\/\/|www.|\..+/g, '');
    tempName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
    return tempName;
}

export default MyIcon;
