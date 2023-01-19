import React from 'react';
import {ApiLocationResponseInterface} from '../../interfaces/api-location-response.interface';
import {IWeatherResponse} from '../App/App';

export interface IWeatherProps {
    weather: IWeatherResponse;
    city: ApiLocationResponseInterface;
}
function Weather(props: IWeatherProps) {
    return (
        <div>
            <span>Country: {props.city.state}</span>
            <span>City: {props.city?.name}</span>
            <span>Temp: {props.weather?.main?.temp}</span>

        </div>
    )
}

export default Weather;
