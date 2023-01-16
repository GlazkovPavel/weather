import React from 'react';

function Button(props: { onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined; }) {
    return(
        <button onClick={props.onButtonClick} ></button>
    )
}

export default Button;
