import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import JSONPlaceholder from './../../containers/JSONPlaceholder';
import Soundcloud from './../../containers/Soundcloud';
import Youtube from './../../containers/Youtube';

import Navigation from './../../shared/Navigation';

import './index.css';

import store from './../../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={JSONPlaceholder} />
            <Route path="/soundcloud" component={Soundcloud} />
            <Route path="/youtube" component={Youtube} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
