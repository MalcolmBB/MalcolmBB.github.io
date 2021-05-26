import React from 'react';
import Button from '../../../Button/Button';
import {StylesProvider} from '@material-ui/core/styles';
import "./WorkContainer.css"

function WorkContainer({type, sideKey, Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo}){
    if (type === "mainAbout"){
        return mainAbout({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo});
    }
    else if (type === "PastWork"){
        if (sideKey % 2 === 0){
            return RightWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo});
        }
        else{
            return LeftWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo});
        }
    }
    else if (type === "mainWork"){
        if (sideKey % 2 === 0){
            return RightMainWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo});
        }
        else{
            return LeftMainWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo});
        }
    }
}

function mainAbout({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo}){
    return (
        <StylesProvider injectFirst>
            <div className="Left MainAbout ExteriorContainer">
                <h1>{Title}</h1>
                <div className="ContentContainer">
                    <img src={imgSrc} alt={imgAlt}/>
                    <div className="SummaryContainer">
                        <p>{paragraph}</p>
                        <Button
                            type="Navigation"
                            className={buttonClassName}
                            linkTo={buttonLinkTo}
                            value="More about me">
                        </Button>
                    </div>
                </div>
            </div>
        </StylesProvider>
    )
}

function LeftMainWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo}){
    buttonClassName = buttonClassName + " invert";
    return (
        <StylesProvider injectFirst>
            <div className="Left MainWorkExteriorContainer">
                <h3>{Title}</h3>
                <div className="MainWorkContentContainer">
                    <img src={imgSrc} alt={imgAlt}/>
                    <div className="MainWorkSummaryContainer">
                        <p>{paragraph}</p>
                        <Button
                            type="Link"
                            className={buttonClassName}
                            linkTo={buttonLinkTo}
                            value="View GitHub repository">
                        </Button>
                    </div>
                </div>
            </div>
        </StylesProvider>
    )
}

function RightMainWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo}){
    buttonClassName = buttonClassName + " invert";
    return (
        <StylesProvider injectFirst>
            <div className="Right MainWorkExteriorContainer">
                <h3>{Title}</h3>
                <div className="MainWorkContentContainer">
                    <div className="MainWorkSummaryContainer">
                        <p>{paragraph}</p>
                        <Button
                            type="Link"
                            className={buttonClassName}
                            linkTo={buttonLinkTo}
                            value="View GitHub repository">
                        </Button>
                    </div>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
            </div>
        </StylesProvider>
    )
}

function RightWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo}){
    return (
        <StylesProvider injectFirst>
            <div className="Right ExteriorContainer">
                <h2>{Title}</h2>
                <div className="ContentContainer">
                    <div className="SummaryContainer">
                        <p>{paragraph}</p>
                        <Button
                            type="Link"
                            className={buttonClassName}
                            linkTo={buttonLinkTo}
                            value="View GitHub repository">
                        </Button>
                    </div>
                    <img src={imgSrc} alt={imgAlt}/>
                </div>
            </div>
        </StylesProvider>
    )
}

function LeftWork({Title, imgSrc, imgAlt, paragraph, buttonClassName, buttonLinkTo}){
    return (
        <StylesProvider injectFirst>
            <div className="Left ExteriorContainer">
                <h2>{Title}</h2>
                <div className="ContentContainer">
                    <img src={imgSrc} alt={imgAlt}/>
                    <div className="SummaryContainer">
                        <p>{paragraph}</p>
                        <Button
                            type="Link"
                            className={buttonClassName}
                            linkTo={buttonLinkTo}
                            value="View GitHub repository">
                        </Button>
                    </div>
                </div>
            </div>
        </StylesProvider>
    )
}

export default WorkContainer;