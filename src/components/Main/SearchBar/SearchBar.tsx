import React from 'react';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

interface ISearchBar {
    isLoader: boolean;
    onSearch: () => void;
    handleSubmit: () => void;
    setQuery: (value: string) => void;
}

function SearchBar(props: ISearchBar) {
    return(
        <form className={`input ${props.isLoader && 'input__hide'}`} onSubmit={props.handleSubmit}>
            <Input onChange={(e) => {
                props.setQuery(e.target.value);
            }
            } />

            <Button onButtonClick={props.onSearch} />
        </form>
    )
}

export default SearchBar;
