import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';

import employeesData from '../../helpers/data/employeesData';
import dogsData from '../../helpers/data/dogsData';

import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walk: walkShape.walkShape,
    deleteSingleWalk: PropTypes.func,
  }

  deleteSingleWalkEvent = (e) => {
    e.preventDefault();
    const { deleteSingleWalk, walk } = this.props;
    deleteSingleWalk(walk.id);
  }

  state = {
    firstName: '',
    lastName: '',
    dogName: '',
  }

  getSingleEmployee = () => {
    const { walk } = this.props;
    employeesData.getSingleEmployee(walk.employeeId)
      .then((response) => {
        this.setState({ firstName: response.data.firstName, lastName: response.data.lastName });
      })
      .catch((error) => console.error(error));
  }

  getSingleDog = () => {
    const { walk } = this.props;
    dogsData.getSingleDog(walk.dogId)
      .then((response) => {
        this.setState({ dogName: response.data.name });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getSingleDog();
    this.getSingleEmployee();
  }

  render() {
    const { walk } = this.props;
    const { firstName, lastName, dogName } = this.state;

    return (
      <div className="card col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{walk.date}</h5>
          <p className="card-text">Walker: {firstName} {lastName}</p>
          <p className="card-text">Dog: {dogName}</p>
          <button className="btn btn-danger" onClick={this.deleteSingleWalkEvent}>Delete</button>
      </div>
    </div>
  </div>
    );
  }
}

export default Walk;
