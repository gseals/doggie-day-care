import React from 'react';
import PropTypes from 'prop-types';
import './StaffRoom.scss';

import Employee from '../Employee/Employee';
import employeeShape from '../../helpers/propz/employeeShape';

class StaffRoom extends React.Component {
  static propTypes = {
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
  }

  render() {
    const myEmployees = this.props.employees;
    const employeeCards = myEmployees.map((employee) => <Employee key={employee.id} employee={employee} />);

    return (
      <div className="Employees container">
        <div>{employeeCards}</div>
      </div>
    );
  }
}

export default StaffRoom;
