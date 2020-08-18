import * as React from 'react'
import * as ReactDOM from 'react-dom'

interface IProps  {
    value: string
}
const  ResultViewComponent: React.FC<IProps> = (props)  => {
    return(
        <>
        <div className="result-window">{props.value}</div>
        </>
    )
}

export default ResultViewComponent