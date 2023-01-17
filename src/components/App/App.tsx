import React from 'react';
import './App.css';
import Header from '../Header/Header';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Main from '../Main/Main';
import api from '../../utils/api';
import {PageNotFound} from '../PageNotFound/PageNotFound';
import Photo from '../Photo/Photo';
import {Loader} from '../Loader/Loader';

function App() {

    const [loader, setLoader] = React.useState(false);
    const [data, setData] = React.useState();
    const [query, serQuery] = React.useState('');

    React.useEffect(() =>{
        showLoader(false);
        // api.getRandom()
        //     .then((data) => {
        //         setData(data)
        //     })
        //     .catch(err => console.error(err))
        //     .finally(() => {
        //         showLoader(false);
        //     })
    }, [])

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
    };

  return (
    <div className="App">
        <Header isLoader={loader} />
        <Routes>
            <Route path="/" element={
                <Main card={data}
                      searchBar={
                          {
                              handleSubmit: handleSubmit,
                              isLoader: loader,
                              query: query,
                              setQuery: serQuery,
                              onSearch: onSearch
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
