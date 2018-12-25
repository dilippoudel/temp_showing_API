import React, { Component } from 'react';
import SearchBox from './searchBox';
import axios from 'axios';
import Weather from './Weather';
const API_KEY = 'a0509a0d7f9a475f36a84b755e74189f'
class App extends Component {
    state = {temp:0, description:'',long:'', city: ''}

    componentDidMount(){
        this.onTermSubmit('Helsinki')
    }
onTermSubmit = async (term) => {

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${term}&APPID=${API_KEY}`)
    this.setState({
    description: response.data.weather[0].description,
    temp: response.data.main.temp,
    icon: response.data.weather["0"].icon,
    city: response.data.name,
    long: response.data.coord.lon,
    lat: response.data.coord.lat,

})
}


    render() {
        const {temp, description, icon, city} = this.state;
        return (
            <div className = "container">
                <SearchBox onFormSubmit = {this.onTermSubmit}/>
                <Weather city = {city} temp = {temp} description = {description} icon = {icon}/>
            </div>
        );
    }
}

export default App;