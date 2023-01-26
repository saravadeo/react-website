import React, { Component } from "react";
import "./scss/main.scss";
import ReactGA from 'react-ga';
import Home from "./screen/home";

class App extends Component {
    
    componentDidMount() {
        ReactGA.initialize('UA-165274480-1');
    }
    
    render() {
        return (
          <Home/>
        );
    }
}

export default App;
