import React, {Component} from 'react';
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom';
import './App.css';
import LoadingScreen from './components/Pages/LoadingScreen/LoadingScreen';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import PastWork from "./components/Pages/PastWork/PastWork";

class App extends Component {
    render(){
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <LoadingScreen path= "/" exact component={LoadingScreen}/>
                        <Route path= "/Home" exact component={Home}/>
                        <Route path= "/About" exact component={About}/>
                        <Route path= "/Past_Work" exact component={PastWork}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
