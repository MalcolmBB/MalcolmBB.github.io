import React, {Component} from 'react';
import {HashRouter as Router,
        Route,
        Routes} from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/Pages/LoadingScreen/LoadingScreen';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import PastWork from "./components/Pages/PastWork/PastWork";
import ContactMe from "./components/Pages/ContactMe/ContactMe";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./scrollToTop";

class App extends Component {
    render(){
        return (
            <Router basename={"/"}>
                <ScrollToTop/>
                <React.Fragment>
                    <Routes>
                        <Route path= "/" exact element={<LoadingScreen/>}/>
                        <Route path= "/Home" exact element={<Home/>}/>
                        <Route path= "/About" exact element={<About/>}/>
                        <Route path= "/Past-work" exact element={<PastWork/>}/>
                        <Route path= "/Contact-me" exact element={<ContactMe/>}/>
                        <Route path= "/Privacy-Policy" exact element={<PrivacyPolicy/>}/>
                    </Routes>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
