import React from 'react';
import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';
import './App.scss';

class App extends React.Component {
  state ={
    dogs: [],
  }

  componentDidMount() {
    this.getAllDogs();
  }

  render() {
    return (
    <div className="App">
        <DogPen />
    </div>
    );
  }
}

export default App;
