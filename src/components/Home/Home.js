import React from 'react';
import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';

import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';

import './Home.scss';

class Home extends React.Component {
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
      <div className="row">
        <DogPen className="container" dogs={this.state.dogs} />
        <StaffRoom className="container" employees={this.state.employees} />
        </div>
    </div>
    );
  }
}

export default Home;
