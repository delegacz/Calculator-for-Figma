import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Button from './SingleButtonComponent'
interface IProps {
    clickHandler: Function  
    }
const KeyboardComponent:React.FC<IProps> = (props) => {
    
    const handleClick = buttonName => {props.clickHandler(buttonName)}  
    
    return(
        <div className="keyboard-wrapper">
            <div className="key-row">
                <Button name="AC" clickHandler={handleClick}/>
                <Button name="+/-" clickHandler={handleClick}/>
                <Button name="%" clickHandler={handleClick}/>
                <Button name="÷" clickHandler={handleClick} blue/>
            </div>
            <div className="key-row">
                <Button name="7" clickHandler={handleClick}/>
                <Button name="8" clickHandler={handleClick}/>
                <Button name="9" clickHandler={handleClick}/>
                <Button name="x" clickHandler={handleClick} blue/>
            </div>
            <div className="key-row">
                <Button name="4" clickHandler={handleClick}/>
                <Button name="5" clickHandler={handleClick}/>
                <Button name="6" clickHandler={handleClick}/>
                <Button name="-" clickHandler={handleClick} blue/>
            </div>
            <div className="key-row">
                <Button name="1" clickHandler={handleClick}/>
                <Button name="2" clickHandler={handleClick}/>
                <Button name="3" clickHandler={handleClick}/>
                <Button name="+" clickHandler={handleClick} blue/>
            </div>
            <div className="key-row">
                <Button name="0" clickHandler={handleClick} wide/>
                <Button name="." clickHandler={handleClick}/>
                <Button name="=" clickHandler={handleClick} blue/>
            </div>
        </div>
    )
}

export default KeyboardComponent