import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Board from './Board.js'

class Game extends Component {
    render(){
        return(
            <div className='game'>
                <div className='game-board'>
                    <Board />
                </div>
                <div className='game-info'>
                    <div>{}</div>
                    <ol>{}</ol>
                </div>
            </div>
        )
    }
}

export default Game
ReactDOM.render( <Game />, document.getElementById('root'))


