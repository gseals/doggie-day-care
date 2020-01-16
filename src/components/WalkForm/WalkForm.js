import React from 'react';

import PropTypes from 'prop-types';

import dogShape from '../../helpers/propz/dogShape';
import employeeShape from '../../helpers/propz/employeeShape';
import walksData from '../../helpers/data/walksData';

import './WalkForm.scss';

class WalkForm extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    createNewWalk: PropTypes.func,
    getAllWalks: PropTypes.func,
  }

state = {
  employeeName: '',
  dogName: '',
  date: '',
}

saveWalkEvent = (e) => {
  e.preventDefault();
  const { createNewWalk } = this.props;
  const addedWalk = {
    employeeId: this.state.employeeName,
    dogId: this.state.dogName,
    date: this.state.date,
  };
  createNewWalk(addedWalk);
  this.setState({ employeeName: '', dogName: '', date: '' });
}

employeeChange = (e) => {
  e.preventDefault();
  this.setState({ employeeName: e.target.value });
}

dogChange = (e) => {
  e.preventDefault();
  this.setState({ dogName: e.target.value });
}

dateChange = (e) => {
  e.preventDefault();
  this.setState({ date: e.target.value });
}

render() {
  const { dogName, employeeName, date } = this.state;
  const { dogs, employees } = this.props;

  return (
    <form className='col-6 offset-3 WalkForm'>
    <div className="input-group mb-3">
      <label htmlFor="employee-name">Walker:</label>
      <select
        className="form-control"
        id="employee-name"
        value={ employeeName }
        onChange={this.employeeChange}
      >
      <option defaultValue>Choose One...</option>
      {
        employees.map((employee) => (
          (<option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)))
      }
      </select>
    </div>
    <div className="input-group mb-3">
      <label htmlFor="dog-name">Dog:</label>
      <select
        className="form-control"
        id="dog-name"
        placeholder="Choose a dog"
        value={dogName}
        onChange={this.dogChange}
      >
        <option>Choose One...</option>
        {
          dogs.map((dog) => (
            (<option key={dog.id} value={dog.id}>{dog.name}</option>)))
        }
        </select>
    </div>
    <div className="input-group date">
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={this.dateChange}
      />
    </div>
      <button className="btn btn-secondary" onClick={this.saveWalkEvent}>Save Walk</button>
    </form>
  );
}
}

export default WalkForm;
