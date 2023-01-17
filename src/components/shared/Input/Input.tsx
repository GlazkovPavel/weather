import React from 'react';
import {IInput} from '../../../interfaces/input.interface';

function Input(props: IInput) {
    return(
        <input value={props.value} onChange={props.onChange} className='input__search'/>
    )
}

export default Input;
