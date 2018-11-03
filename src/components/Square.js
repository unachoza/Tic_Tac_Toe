import React, {Component} from 'react'

class Square extends Component{
    render(){
        return(
            <div>
            <button className="square">
                {}
            </button>
            </div>
        )
    }
}

export default Square
ReactDOM.render( <Square />, document.getElementById('root'))
