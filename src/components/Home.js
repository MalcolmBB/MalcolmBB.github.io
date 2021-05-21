import React from 'react';
import Header from './Header'
import Footer from './Footer'

class Home extends React.Component {
    render(){
        return (
            <div>
                <Header></Header>
                <div className="mainBody">
                    <div className="mainContainer">
                            <div className="main AboutContainer">
                                <h1>About me</h1>
                                <div className="innerAboutContainer">
                                    <div className="about aboutMePicture">
                                        <img src="../images/AboutMePicture.jpg" alt="Malcolm Baatjies"/>
                                    </div>
                                    <div className="about aboutMeSummary">
                                        <p>Quo nam velit ullamco iis cernantur hic nisi. Eu quo export fore culpa.
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
                                            malis pariatur fore do ex irure expetendis.</p>
                                        <input type="button" className="button bAboutContainer" href="about.html" value="<More about me/>"/>
                                    </div>
                                </div>
                            </div>
                            <div className="main PastWorkContainer">
                                    <div className="pastWork JavaProjects">
                                        <h2>Java Projects</h2>
                                            <div className="Project java n">
                                                <h4>Project n</h4>
                                                <img src="" alt="Java Project n"/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <input type="button" className="button bProjectN" value="<View GitHub repository/>"/>
                                            </div>
                                            <div className="Project java n">
                                                <h4>Project n</h4>
                                                <img src="" alt="Java Project n"/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <input type="button" className="button bProjectN" value="<View GitHub repository/>"/>
                                            </div>
                                    </div>
                                    <div className="pastWork PythonProjects">
                                        <h2>Python Projects</h2>
                                        <div className="Project python n">
                                            <h4>Project n</h4>
                                            <img src="" alt="Python Project n"/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <input type="button" className="button bProjectN" value="<View GitHub repository/>"/>
                                        </div>
                                        <div className="Project python n">
                                            <h4>Project n</h4>
                                            <img src="" alt="Python Project n"/>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <input type="button" className="button bProjectN" value="<View GitHub repository/>"/>
                                        </div>
                                    </div>
                                    <div className="pastWork OtherProjects">
                                            <h2>Other Projects</h2>
                                            <div className="Project other n">
                                                <h4>Project n</h4>
                                                <img src="" alt="Other Project n"/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <input type="button" className="button bProjectN" value="<View GitHub repository/>"/>
                                            </div>
                                            <div className="Project other n">
                                                <h4>Project n</h4>
                                                <img src="" alt="Other Project n"/>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                <input type="button" className="button bProjectN" value="<View GitHub repository/>"/>
                                            </div>
                                    </div>
                            </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;
