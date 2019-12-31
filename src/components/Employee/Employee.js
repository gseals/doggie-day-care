import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';
import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employees: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;

    return (
      <div className="Employee col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
          <p className="card-text">Phone Number: {employee.phoneNumber}</p>
      </div>
    </div>
  </div>
    );
  }
}

export default Employee;
