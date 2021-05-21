import React, {Component} from 'react';
import {BrowserRouter as Router,
        Route,
        Switch} from 'react-router-dom';
import './App.css';
import './styles/ButtonStyling.css';
import './styles/home.css';
import './styles/main.css';
import LoadingScreen from './components/LoadingScreen'
import Home from './components/Home'

class App extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <Router>
                <React.Fragment>
                    <Switch>
                        <LoadingScreen path= "/" exact component={LoadingScreen}/>
                        <Route path= "/Home" exact component={Home}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
