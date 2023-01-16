import { ChangeEventHandler } from "react";

function Input(props: { onChange: ChangeEventHandler<HTMLInputElement> | undefined; }) {
    return(
        <input onChange={props.onChange} className='input__search'/>
    )
}

export default Input;
