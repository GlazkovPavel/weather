import React from 'react';
import './Button.css';

function Button(props: { onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {
    return(
        <button className="button" onClick={props.onButtonClick} >Search</button>
    )
}

export default Button;
