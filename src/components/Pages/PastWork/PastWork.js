import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import WorkList from './WorkList';
import WorkContainer from './WorkContainer/WorkContainer';

class PastWork extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                <div className="mainBody">
                    <div className="mainContainer">
                            {WorkList.map((wl, key) => (
                                <WorkContainer
                                    key={key}
                                    type="PastWork"
                                    sideKey={key}
                                    Title={wl.Title}
                                    imgSrc={wl.imgSrc}
                                    imgAlt={wl.imgAlt}
                                    paragraph={wl.paragraph}
                                    buttonClassName={wl.buttonClassName}
                                    buttonLinkTo={wl.buttonLinkTo}
                                ></WorkContainer>
                            ))}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default PastWork;
