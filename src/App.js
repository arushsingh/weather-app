import React from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/weather';


const API_key = "ecc1f89f4b873913a74793d92ba7290d";
class App extends React.Component {
  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    Humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }



  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        Humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: "",

      })
    } else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        Humidity: undefined,
        description: undefined,
        error: "Please Enter a value !",
      })
    }
  }
  render() {
    return (
      <div className="app-container">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temprature={this.state.temprature}
          city={this.state.city}
          country={this.state.country}
          Humidity={this.state.Humidity}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error}
        />

      </div >
    )
  }
}
export default App;