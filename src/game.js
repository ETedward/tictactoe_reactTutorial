import React from 'react';


class Square extends React.Component {

  /* right now we are moving constructor for state from Square to Board
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      }
    } 
    //this.setState({value: 'X'})}>
 */

    render() {
      return (
        <button 
        className="square" 
        onClick = {() => this.props.onClick()}>
        {this.props.value}
        </button>
      );
    }
  }
  

  class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        squares: Array(9).fill(null),
      };
    }

    renderSquare(i) {
      return (
      <Square
      value = {this.state.squares[i]}
      onClick = {() => this.handleClick(i)} />
      );
    }

    handleClick(i) {
      const squares = this.state.squares.slice(); 
      // slice creates of a copy of array instead of modifying original
      squares[i] = 'O';
      this.setState ({squares: squares})
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  export class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
