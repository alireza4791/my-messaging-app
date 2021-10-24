import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import HomePage from './Home/HomePage';
import LandingPage from './LandingPage/LandingPage';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Route 
                    exact 
                    path='/Home' 
                    component={HomePage} />

                    <Route 
                    exact 
                    path='/' 
                    component={LandingPage} />
                </div>
            </BrowserRouter>
        )
    }
}
