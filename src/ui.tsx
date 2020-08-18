import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './ui.css'
import ButtonComponent from './ui_components/ButtonComponent'
import KeyboardComponent from './ui_components/KeyboardComponent'
import calculate from './functionality/calculations'


import ResultViewComponent from './ui_components/ResultViewComponent'

class App extends React.Component {
   state = {
      total: null,
      next: null,
      operation: null
   }
   
  
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName))
  }
  
  

render() {
  return (
    <div className="wrapper">
      <ResultViewComponent value={this.state.next || this.state.total || "0"} />
      <KeyboardComponent clickHandler={this.handleClick}/>
    </div>
  )
}
 
}

ReactDOM.render(<App />, document.getElementById('react-page'))