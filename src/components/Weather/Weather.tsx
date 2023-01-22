import React from 'react';
import {ApiLocationResponseInterface} from '../../interfaces/api-location-response.interface';
import {IWeatherResponse} from '../App/App';
import './Weather.css';

export interface IWeatherProps {
    weather: IWeatherResponse;
    city: ApiLocationResponseInterface;
}
function Weather(props: IWeatherProps) {
    return (
        <div className='weather'>
            <div className='cards card__country'>
                <span className="weather__title">Country:</span>
                <span className="weather__description">{props.city.state}</span>
            </div>
            <div className='cards card__city'>
                <span className="weather__title">City: </span>
                <span className="weather__description">{props.city?.name}</span>
            </div>
            <div className='cards card__temp'>
                <span className="weather__title">Temp:</span>
                <span className="weather__description">{props.weather?.main?.temp}</span>
            </div>
            <div className='cards card__feels_like'>
                <span className="weather__title">Feels like:</span>
                <span className="weather__description">{props.weather?.main?.feels_like}</span>
            </div>
            <div className='cards card__humidity'>
                <span className="weather__title">Humidity:</span>
                <span className="weather__description">{props.weather?.main?.humidity}</span>
                </div>
            <div className='cards card__temp_max'>
                <span className="weather__title">Temp max:</span>
                <span className="weather__description">{props.weather?.main?.temp_max}</span>
            </div>
            <div className='cards card__temp_min'>
                <span className="weather__title">Temp min:</span>
                <span className="weather__description">{props.weather?.main?.temp_min}</span>
                </div>
            <div className='cards card__pressure'>
                <span className="weather__title">Pressure:</span>
                <span className="weather__description">{props.weather?.main?.pressure}
                </span>
            </div>
        </div>
    )
}

export default Weather;
