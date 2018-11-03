import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Square extends Component{
    constructor(props){
        super(props)
        this.state ={
            value: null
        }
    }
    render(){
        return(
            <button className="square"
            onClick={() => this.setState({value})
            }>
                {this.state.value}
            </button>
        )
    }
}

export default Square
ReactDOM.render( <Square />, document.getElementById('root'))
