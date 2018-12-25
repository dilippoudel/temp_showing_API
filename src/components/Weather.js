import React from 'react';
const Weather = (props) => {
    const celsius = Math.floor(props.temp - 273.15);
    return(
        <div  style = {{backgroundColor: 'lightblue'}} className = "weather">
            <h4>City: {props.city}</h4>
            <h4>Current Temp: {celsius}</h4>
            <h4>{props.description}</h4>
            <img alt = "" style = {{width: '100px', height : '100px'}} src = {`https://openweathermap.org/img/w/${props.icon}.png`}/>
        </div>
    )
}
export default Weather;