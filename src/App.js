import React, { Component } from 'react';
import classes from './App.css';
import CityScheme from './containers/CityScheme/CityScheme'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={classes.App}>
                <CityScheme />
            </div>
        )
    }
};

export default App;