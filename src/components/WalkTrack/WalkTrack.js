import React from 'react';
import PropTypes from 'prop-types';
import './WalkTrack.scss';

import Walk from '../Walk/Walk';
import walkShape from '../../helpers/propz/walkShape';
import walksData from '../../helpers/data/walksData';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';
import WalkForm from '../WalkForm/WalkForm';

class WalkTrack extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogsShape),
    getAllWalks: PropTypes.func,
  }

  deleteSingleWalk = (walkId) => {
    walksData.deleteAWalk(walkId)
      .then(() => {
        this.props.getAllWalks();
      })
      .catch((errorFromDeleteWalk) => console.error({ errorFromDeleteWalk }));
  }

  createNewWalk = (walkInfo) => {
    walksData.createNewWalk(walkInfo)
      .then((walks) => {
        this.props.getAllWalks();
      })
      .catch((error) => console.error({ error }));
  }

  render() {
    const { walks, employees, dogs } = this.props;

    return (
      <div className="Walks col-4">
        <div>
          {
            walks.map((walk) => <Walk key={walk.id} walk={walk} employees={employees} dogs={dogs} deleteSingleWalk={this.deleteSingleWalk} />)
          }
          <WalkForm employees={employees} dogs={dogs} createNewWalk={this.createNewWalk}/>
        </div>
      </div>
    );
  }
}

export default WalkTrack;
