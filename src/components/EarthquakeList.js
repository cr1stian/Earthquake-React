import React, { Component } from 'react';
import '../styles/App.css';
import quakeData from '../data/earthquakes';
import moment from 'moment';

export default class EarthquakeList extends Component {
  render() {
    return (
      <div className="EarthquakeList">

  {quakeData.features.map((info) => <div className="col-sm-6" key={info.id}>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{info.properties.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {info.properties.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(info.properties.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {info.geometry.coordinates}</p>

              <a href={info.properties.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>)}

      </div>
    );
  }
}
