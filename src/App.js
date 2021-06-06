import React, {Component} from 'react';
import {HashRouter as Router,
        Route,
        Switch} from 'react-router-dom';
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
                    <Switch>
                        <LoadingScreen path= "/" exact component={LoadingScreen}/>
                        <Route path= "/Home" exact component={Home}/>
                        <Route path= "/About" exact component={About}/>
                        <Route path= "/Past-work" exact component={PastWork}/>
                        <Route path= "/Contact-me" exact component={ContactMe}/>
                        <Route path= "/Privacy-Policy" exact component={PrivacyPolicy}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
