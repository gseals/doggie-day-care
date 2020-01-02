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
    this.getAllDogs();
    this.getAllEmployees();
  }

  getAllDogs = () => {
    dogsData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((error) => console.error({ error }));
  }

  getAllEmployees = () => {
    employeesData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((error) => console.error({ error }));
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
