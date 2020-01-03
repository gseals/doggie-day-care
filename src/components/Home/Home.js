import React from 'react';
import dogsData from '../../helpers/data/dogsData';
import DogPen from '../DogPen/DogPen';
import employeesData from '../../helpers/data/employeesData';
import StaffRoom from '../StaffRoom/StaffRoom';
import walkData from '../../helpers/data/walksData';
import WalkTrack from '../WalkTrack/WalkTrack';

import './Home.scss';

class Home extends React.Component {
  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  componentDidMount() {
    this.getAllDogs();
    this.getAllEmployees();
    this.getAllWalks();
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

  getAllWalks = () => {
    walkData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((error) => console.error({ error }));
  }

  render() {
    return (
    <div className="App">
      <div className="row">
        <DogPen className="container" dogs={this.state.dogs} />
        <StaffRoom className="container" employees={this.state.employees} />
        <WalkTrack className="container" walks={this.state.walks} />
        </div>
    </div>
    );
  }
}

export default Home;
