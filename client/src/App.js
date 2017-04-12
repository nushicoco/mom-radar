import React, { Component } from 'react';

import './App.css';

import Profile from './containers/profile';
import NavigationBar from "./containers/navigation_bar";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {status:"ok", userName:"Coco"}

    }

    render() {
        return (
            <div>
                <NavigationBar/>
                <Profile userName={this.state.userName} />
            </div>);
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
