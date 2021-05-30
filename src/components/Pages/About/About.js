import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AboutContent from './AboutContent/AboutContent';
import AboutInfo from './AboutInfo';
import "./About.css";

class About extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                    <div className="aboutContainer">
                        {AboutInfo.map((ai, key) => (
                            <AboutContent
                                key={key}
                                type={ai.type}
                                sideKey={key}
                                Title={ai.Title}
                                imgSrc={ai.imgSrc}
                                imgAlt={ai.imgAlt}
                                paragraph={ai.paragraph}
                            ></AboutContent>
                        ))}
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default About;
