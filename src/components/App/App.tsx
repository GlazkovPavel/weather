import React from 'react';
import './App.css';
import Header from '../Header/Header';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import api from '../../utils/apiUnsplash';
import {PageNotFound} from '../PageNotFound/PageNotFound';
import Photo from '../Photo/Photo';
import {Loader} from '../Loader/Loader';
import apiWeather from '../../utils/apiWeather';
import {ApiLocationResponseInterface} from '../../interfaces/api-location-response.interface';

export interface IWeatherResponse {
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;

    }
}
function App() {

    const [loader, setLoader] = React.useState(false);
    const [data, setData] = React.useState();
    const [query, setQuery] = React.useState('');
    const [date, setDate] = React.useState('');
    const [dataWeather, setDataWeather] = React.useState({} as IWeatherResponse);
    const [city, setCity] = React.useState({} as ApiLocationResponseInterface);

    function showLoader(item: boolean){
        setLoader(item)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSearch();
    }

    const onSearch = () => {
        showLoader(true)
        apiWeather.getLocation(query)
            .then((res: ApiLocationResponseInterface[]) => {
                setCity(res[0]);
            })
            .then(() => {
                apiWeather.getWeatherByLocation(city.lat, city.lon)
                    .then((response: IWeatherResponse) => {
                        console.log(response);
                        setDataWeather(response);
                    })
            })
        api
            .search(query)
            .then((data: any) => {
                setData(data.results);
            })
            .catch((err: any) => {console.log(err)})
            .finally(() => {
                showLoader(false);
            })
    };

  return (
    <div className="App">
        <Header isLoader={loader} />
        <Routes>
            <Route path="/" element={
                <Main card={data}
                      weather={dataWeather}
                      city={city}
                      searchBar={
                          {
                              handleSubmit: handleSubmit,
                              isLoader: loader,
                              query: query,
                              setQuery: setQuery,
                              onSearch: onSearch,
                              setDate: setDate,
                          }
                      }/>
            }/>
            <Route path="/photos/:id" element={
                <Photo showLoader={showLoader} />
            }/>
            <Route path="*" element={
                <PageNotFound />
            } />

        </Routes>
        <Loader isLoader={loader}/>
    </div>
  );
}

export default App;
