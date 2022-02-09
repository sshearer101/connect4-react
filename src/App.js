import React from 'react'
import './App.css';
import {Connect4} from './components/Connect4'

export default function App() {
  return (
    <div className="App">
      <h1>Connect Four Game</h1>
      <h2>With React</h2>
      <Connect4 />
    </div>
  );
}