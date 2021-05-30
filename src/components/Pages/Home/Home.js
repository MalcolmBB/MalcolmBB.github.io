import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import WorkContainer from '../PastWork/WorkContainer/WorkContainer';
import WorkList from '../PastWork/WorkList';
import './Home.css';

var arr = []

class Home extends React.Component {
    constructor(){
        super();

        arr=[];

        while (arr.length < 6){
            var r = Math.floor(Math.random() * WorkList.length);
            if (arr.indexOf(r) === -1) arr.push(r);
        }

        for (var i = 0; i < arr.length; i++){
            arr[i] = WorkList[arr[i]];
        }
    }
    render(){
        return (
            <div>
                <Header></Header>
                    <div className="mainContainer">
                            <WorkContainer
                                type = "mainAbout"
                                sideKey='-1'
                                Title="About me"
                                imgSrc="../images/AboutMePicture.jpg"
                                imgAlt="Malcolm Baatjies"
                                paragraph='Quo nam velit ullamco iis cernantur hic nisi. Eu quo export fore culpa.
                                    Consequat a anim o fugiat imitarentur incididunt ipsum probant, irure cernantur
                                    se sunt quid ne ex legam expetendis incurreret.E minim nescius excepteur ex
                                    cupidatat ubi aute. E an tempor esse fugiat. Export incurreret non nulla malis,
                                    minim an mandaremus iis cillum ad id in fugiat culpa aute, tamen a de irure
                                    quibusdam. Irure arbitror ubi domesticarum ita quae doctrina imitarentur o culpa
                                    deserunt graviterque, malis admodum de expetendis, probant fore eram nescius
                                    malis et illum sempiternum vidisse sint incididunt, deserunt exquisitaque se
                                    ingeniis ea occaecat te dolor.

                                    Id de sempiternum, possumus anim et admodum arbitrantur, malis eiusmod do
                                    coniunctione, quamquam quem laboris, id e quis tempor veniam, sed ad consectetur
                                    ab vidisse dolor dolor non multos, et aute quibusdam voluptatibus. Ipsum
                                    exercitation pariatur legam commodo non do amet ipsum ad singulis, se aliquip
                                    illustriora, a incurreret e possumus. Ex labore multos esse cupidatat.Iis dolore
                                    ad anim, qui voluptate nam deserunt do eu sint singulis in ex mandaremus de
                                    laborum. Aliquip quid culpa laboris duis. Commodo domesticarum o deserunt si ne
                                    quid occaecat instituendarum te aute pariatur constias si veniam mandaremus ea
                                    sempiternum. Quid e doctrina nam sunt ut ipsum qui ingeniis, mandaremus culpa
                                    malis pariatur fore do ex irure expetendis.'
                                buttonClassName="button bAboutContainer"
                                buttonLinkTo="/About"
                            ></WorkContainer>
                            <div className="PastWorkContainer">
                                <h3>Some of my past work</h3>
                                    {arr.map((wl, key) => (
                                        <WorkContainer
                                            key={key}
                                            type="mainWork"
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

export default Home;
