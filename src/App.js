import React, { Component } from "react";
import "./scss/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Home from "./screen/home";
import Moon from "./screen/moon";

class App extends Component {
    
    componentDidMount() {
        ReactGA.initialize('UA-165274480-1');
    }
    
    render() {
        return (
          <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="moon" element={<Moon />} />
            </Routes>
          </BrowserRouter>
        );
    }
}

export default App;
