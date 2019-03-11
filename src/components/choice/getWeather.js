import React, { Component } from 'react';

import feeling from'../../img/ico/feeling.png';
import Thermometer from'../../img/ico/Thermometer.png';
import humidity from'../../img/ico/humidity.png';
import ruler from'../../img/ico/ruler.png';
import barometer from'../../img/ico/barometer.png';
import wind from'../../img/ico/wind.png';


import style from './index.css'


const API_KEY='1f21d02387f64e6683a184348191003'

class Getweather extends Component {

    constructor(props) {
      super(props);
      this.state = { data : {
                      current:[],
                      location:[]
                  },
                      city:[]}

      this.handleChange = this.handleChange.bind(this);
      this.add= this.add.bind(this);
    }

    handleChange(event) {
      event.preventDefault();
      this.setState({city: event.target.value})

  }

  //function(event){
  //    if(event.keyCode == 13){
   //   }
    //};

  add = async (event) => { 
      event.preventDefault();
      const api_url = await
      fetch(`http://api.apixu.com/v1/current.json?key=9aab06c4c4024a32be0185051191003&q=${this.state.city}`);
      const data = await api_url.json();
      
      this.setState({data})
         //console.log(this.state.data.current,this.state.data.location)

         document.querySelector('.weather-result').style = 'display: block'

  };

    render() {

      return (

      <div className="search">

      <form >
        <input type="text"
          placeholder="Город"
          onChange={this.handleChange}
        />
        <button onClick={this.add} className="weath-btn">Показать</button>   
      </form>

        <div onClick={this.add} className={"weather-result"}>
         <h2>{this.state.data.location.name}</h2>
           <ul className="weather-list">
             <li className="weather-list-item" title="° воздуха"><img src={Thermometer} alt="°C" className="weather-icons"></img>{this.state.data.current.temp_c +'°C'}</li>
             <li className="weather-list-item" title="по ощущениям"><img src={feeling} alt="°C" className="weather-icons"></img>{this.state.data.current.feelslike_c +'°C'}</li>
             <li className="weather-list-item" title="влажность"><img src={humidity} alt="%" className="weather-icons"></img>{this.state.data.current.humidity +'%'}</li>
             <li className="weather-list-item" title="мм осадков"><img src={ruler} alt="мм" className="weather-icons"></img>{this.state.data.current.precip_mm +'мм'}</li>
             <li className="weather-list-item" title="давление"><img src={barometer} alt="мм" className="weather-icons"></img>{this.state.data.current.pressure_mb +'мм рт.ст.'}</li>
             <li className="weather-list-item" title="скорость ветра"><img src={wind} alt="км\час" className="weather-icons"></img>{this.state.data.current.wind_kph +'км/час'}</li>
           </ul>
           <p className="weath-last-update">{"Последнее обновление: "+this.state.data.current.last_updated}</p>
        </div> 

      </div>

      );
    }
  }
  export default Getweather;