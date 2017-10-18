import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import JSONPlaceholder from './../../containers/JSONPlaceholder';
import Soundcloud from './../../containers/Soundcloud';
import Youtube from './../../containers/Youtube';

import Navigation from './../../shared/Navigation';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={JSONPlaceholder} />
          <Route path="/soundcloud" component={Soundcloud} />
          <Route path="/youtube" component={Youtube} />
        </Switch>
      </div>
    );
  }
}

export default App;
