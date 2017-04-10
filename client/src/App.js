import React, { Component } from 'react';
import { createStore } from 'redux'
import rootReducer from './reducers/index'

import './App.css';

import Profile from './containers/profile';

class App extends Component {

    constructor(props) {
        super(props);

        fetch(`/users`, {
            accept: 'application/json',
        }).then(function (resp) {
            window.coco = resp;
            console.log("got some info", resp)
            return resp;
        }).then(this.parseJSON.bind(this))
          .then(this.afterParseJson.bind(this));
    }

    render() {
        let store =  createStore(rootReducer);
        return (
            <div className="App">
                <Profile store={store} />
            </div>);
    }

    parseJSON(response) {
        return response.json();
    }

    afterParseJson(info) {

        console.log("info:", info);
        this.setState ={userName:info.userName}
    }
}
export default App;

/*
 <img src={logo} className="App-logo" alt="logo" />
 <h2>Welcome to React</h2>
 </div>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>

 */
