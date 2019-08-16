import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import PetReducere from './reducers/PetReducer';
import Router from './Router';


class App extends Component {
  
  render() {
    console.ignoredYellowBox=['react-native BugReporting extraData:'];
    const store = createStore(PetReducere);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;