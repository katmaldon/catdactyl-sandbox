
import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomeContainer from './Containers/HomeContainer';
import AboutContainer from './Containers/AboutContainer';
import GalleryContainer from './Containers/GalleryContainer';
import ContactContainer from './Containers/ContactContainer';

class App extends Component {

    render() {
        return (
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path='/' render={(routerProps) => <HomeContainer {...routerProps} />} />
                    <Route path='/contact' render={() => <ContactContainer />} />
                    <Route path='/about' render={() => <AboutContainer />} />
                    <Route path='/projects' render={() => <GalleryContainer />} />
                </Switch>
                <footer>© {new Date().toISOString().substring(0, 4)} Anca Risca</footer>
            </div>
        );
    }
}

export default App;
