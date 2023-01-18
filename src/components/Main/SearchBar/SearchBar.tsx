import React from 'react';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import {ISearchBar} from '../../../interfaces/search-bar.interface';
import './SearchBar.css';
import * as moment_ from 'moment';

const moment: any = moment_;

function SearchBar(props: ISearchBar) {

    const [date, setDate] = React.useState('');

    React.useEffect(() => {
        setDate(moment().format('YYYY-MM-DD'))
    }, [])
    const minDate = moment().subtract('days', 7).format('YYYY-MM-DD');
    const maxDate = moment().add('days', 7).format('YYYY-MM-DD');

    function changeDate(val: string): void {
        setDate(val);
    }

    return(
        <form className={`input ${props.isLoader && 'input__hide'}`} onSubmit={props.handleSubmit}>
            <Input value={props.query} onChange={(e) => {
                props.setQuery(e.target.value);
            }
            } />

            <input type="date"
                   onChange={(e) => {
                       changeDate(e.target.value)
                       props.setDate(e.target.value);
                   }}
                   value={date}
                   className="input__date"
                   min={minDate}
                   max={maxDate}
            />

            <Button onButtonClick={props.handleSubmit} />
        </form>
    )
}

export default SearchBar;
