import React from 'react';
import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';
import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    this.setState({ dogs });
  }

  render() {
    return (
    <div className="App">
        <DogPen dogs={this.state.dogs} />
    </div>
    );
  }
}

export default App;
