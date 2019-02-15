import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class List extends Component {
    render(){
        return (
            <div className="liste"> ceci est une liste</div>
        );
    }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
           <h2>Apprendre reactJs</h2>
          </p>

        </header>
        <List />
      </div>
    );
  }
}

export default App;
