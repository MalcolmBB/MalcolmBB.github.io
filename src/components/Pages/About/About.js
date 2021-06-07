import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import AboutContent from './AboutContent/AboutContent';
import AboutInfo from './AboutInfo';
import "./About.css";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class About extends React.Component {
    constructor(){
        super()
        this.state = {matches: window.matchMedia("(max-width:768px)").matches};
    }
    componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(max-width: 768px)").addListener(handler);
    }
    render(){
        if (this.state.matches){
            return (
                <div>
                    <Header></Header>
                    <SimpleBar style={{ height: '100vh'}} forceVisible="y" autoHide={false}>
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
                                        cards={ai.cards}
                                    ></AboutContent>
                                ))}
                            </div>
                        <Footer></Footer>
                    </SimpleBar>
                </div>
            );
        } else {
            return (
                <div>
                    <SimpleBar style={{ height: '100vh'}} forceVisible="y" autoHide={false}>
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
                                        cards={ai.cards}
                                    ></AboutContent>
                                ))}
                            </div>
                        <Footer></Footer>
                    </SimpleBar>
                </div>
            );
        }
    }
}

export default About;
