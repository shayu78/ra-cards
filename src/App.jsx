import React from 'react';
import './App.css';
import './bootstrap.min.css';
import logo from './images/logo.svg';
import Card from './components/Card/Card';

function App() {

  return (
    <div className="component__wrapper">
      <Card title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src={logo} className="card-img-top logo" alt="..." />
      </Card>
      <Card title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content." />
    </div>
  );

}

export default App;
