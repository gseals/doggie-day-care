import React from 'react';
import dogsData from '../helpers/data/dogsData';
import DogPen from '../components/DogPen/DogPen';

import employeesData from '../helpers/data/employeesData';
import StaffRoom from '../components/StaffRoom/StaffRoom';

import './App.scss';

class App extends React.Component {
  state = {
    dogs: [],
    employees: [],
  }

  componentDidMount() {
    const dogs = dogsData.getAllDogs();
    const employees = employeesData.getAllEmployees();
    this.setState({ dogs, employees });
  }

  render() {
    return (
    <div className="App">
        <DogPen dogs={this.state.dogs} />
        <StaffRoom employees={this.state.employees} />
    </div>
    );
  }
}

export default App;
