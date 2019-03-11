import React, { Component } from 'react';

import style from './index.css'
import Getweather from './getWeather';



class ChoiceBody extends Component {

  render() {
    return (
      <div className="container">
        <Getweather />
      </div>
    );
  }
}
export default ChoiceBody;