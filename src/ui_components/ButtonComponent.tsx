import * as React from 'react'
import * as ReactDOM from 'react-dom'

const ButtonComponent = (props) => {
    return (
        <button onClick={props.handleClick}>+</button>
    )
}

export default ButtonComponent