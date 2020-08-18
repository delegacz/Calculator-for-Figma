import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IProps {
    name: string,
    wide?: boolean,
    blue?: boolean,
    clickHandler: Function
}



const Button:React.FC<IProps> = (props) => {
    
    let handleClick = () => {
        props.clickHandler(props.name)
    }

    const className = [
        "component-button",
        props.blue ? "blue" : "",
        props.wide ? "wide" : "",
    ]

    return(
        <div className={className.join(" ").trim()}>
            <button onClick={handleClick}>{props.name}</button>
        </div>
    )
}

export default Button