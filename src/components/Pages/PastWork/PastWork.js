import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import WorkList from './WorkList';
import WorkContainer from './WorkContainer/WorkContainer';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

class PastWork extends React.Component {
    constructor(){
        super();

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
                        <div className="mainBody">
                            <div className="mainContainer">
                                    {WorkList.map((wl, key) => (
                                        <WorkContainer
                                            key={key}
                                            type="PastWork"
                                            sideKey={key}
                                            Title={wl.Title}
                                            Subtitle={wl.Subtitle}
                                            imgSrc={wl.imgSrc}
                                            imgAlt={wl.imgAlt}
                                            paragraph={wl.paragraph}
                                            buttonClassName={wl.buttonClassName}
                                            buttonLinkTo={wl.buttonLinkTo}
                                            buttonValue={wl.buttonValue}
                                        ></WorkContainer>
                                    ))}
                            </div>
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
                        <div className="mainBody">
                            <div className="mainContainer">
                                    {WorkList.map((wl, key) => (
                                        <WorkContainer
                                            key={key}
                                            type="PastWork"
                                            sideKey={key}
                                            Title={wl.Title}
                                            Subtitle={wl.Subtitle}
                                            imgSrc={wl.imgSrc}
                                            imgAlt={wl.imgAlt}
                                            paragraph={wl.paragraph}
                                            buttonClassName={wl.buttonClassName}
                                            buttonLinkTo={wl.buttonLinkTo}
                                            buttonValue={wl.buttonValue}
                                        ></WorkContainer>
                                    ))}
                            </div>
                        </div>
                        <Footer></Footer>
                    </SimpleBar>
                </div>
            );
        }
    }
}

export default PastWork;
