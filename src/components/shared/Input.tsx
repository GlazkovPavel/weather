import React from 'react';

function Input(props: { onChange: React.ChangeEventHandler<HTMLInputElement> | undefined; }) {
    return(
        <input onChange={props.onChange} className='input__search'/>
    )
}

export default Input;
