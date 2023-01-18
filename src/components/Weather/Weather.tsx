import React from 'react';

function Weather(props: any) {
    return (
        <div>
            <span>Country: {props.value?.location?.country}</span>
            <span>City: {props.value?.location?.name}</span>
            <span>Temp: {props.value?.current?.temp_c}</span>

        </div>
    )
}

export default Weather;
