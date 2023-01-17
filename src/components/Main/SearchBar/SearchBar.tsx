import React from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import {ISearchBar} from '../../../interfaces/search-bar.interface';
import './SearchBar.css';

function SearchBar(props: ISearchBar) {
    return(
        <form className={`input ${props.isLoader && 'input__hide'}`} onSubmit={props.handleSubmit}>
            <Input value={props.query} onChange={(e) => {
                props.setQuery(e.target.value);
            }
            } />

            <Button onButtonClick={props.onSearch} />
        </form>
    )
}

export default SearchBar;
