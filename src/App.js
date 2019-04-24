import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/main.css'
import Campo from './components/Campo'

const tabela = ['','','','','','','','','']
class App extends Component {
  render() {
    return (
      <div className="container principal"> 
        <div className="container">
          <h1>Jogo da Velha</h1>
          <div className="ui centered grid tabela">
            <Campo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
