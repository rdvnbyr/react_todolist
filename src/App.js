import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import logo from './assets/logo.png'

function App() {
  return (
    <div>
      <Header  src={ logo }/>
      <HomePage />
    </div>
  );
}


export default App;
