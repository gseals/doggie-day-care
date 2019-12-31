import React from 'react';
import firebase from 'firebase/app';

import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';

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
      <div className="row">
        <DogPen className="container" dogs={this.state.dogs} />
        <StaffRoom className="container" employees={this.state.employees} />
        </div>
    </div>
    );
  }
}

export default App;
