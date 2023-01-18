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

function App() {

    const [loader, setLoader] = React.useState(false);
    const [data, setData] = React.useState();
    const [query, setQuery] = React.useState('');
    const [date, setDate] = React.useState('');
    const [dataWeather, setDataWeather] = React.useState();

    function showLoader(item: boolean){
        setLoader(item)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSearch();
    }

    const onSearch = () => {
        showLoader(true)
        api
            .search(query)
            .then((data: any) => {
                setData(data.results);
            })
            .catch((err: any) => {console.log(err)})
            .finally(() => {
                showLoader(false);
            })
        apiWeather.getWeather(query, date)
            .then((data: any) => {
                console.log(data);
                setDataWeather(data);
            })
        console.log(date)
    };

  return (
    <div className="App">
        <Header isLoader={loader} />
        <Routes>
            <Route path="/" element={
                <Main card={data}
                      weather={dataWeather}
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
