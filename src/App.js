import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  state = {
    input: '',
    list: []
  }

  handleInput = e => {
    //this.props.store.dispatch({ type: 'ADD_TO_DO', payload: { input: e.target.value } })
    this.props.dispatch({ type: "ADD_TO_DO", payload: { id: 123, title: "Hello World" } })
    this.setState({
      input: e.target.value
    })
    //console.log('input state', this.state)
  }
  handleAdd = () => {
    this.setState({
      list: [...this.state.list, this.state.input]
    })
    //console.log('add state', this.state)
  }
  render() {
    const { list } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <input placeholder="new item" onChange={this.handleInput}></input>
          <button onClick={this.handleAdd}>Add</button>
          <div>{list.map((item, i) => <div key={i}>{item}</div>
          )}</div>

        </header>
      </div>
    );
  }
}

export default App;
