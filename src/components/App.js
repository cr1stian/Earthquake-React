import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList.js';
import EarthquakeInfo from './EarthquakeInfo';

class App extends Component {
  render() {
    return (
      <div className="App">

           <div className="title">


           <div className="my-header">


           <h1>EarthQuakes</h1>

           </div>
           </div>
           <EarthquakeInfo />
           <EarthquakeList />
           </div>
    );
  }
}

export default App;
