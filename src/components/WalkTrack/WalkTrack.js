import React from 'react';
import PropTypes from 'prop-types';
import './WalkTrack.scss';

import Walk from '../Walk/Walk';
import walkShape from '../../helpers/propz/walkShape';
import walksData from '../../helpers/data/walksData';

class WalkTrack extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    getAllWalks: PropTypes.func,
  }

  deleteSingleWalk = (walkId) => {
    walksData.deleteAWalk(walkId)
      .then(() => {
        this.getAllWalks();
      })
      .catch((errorFromDeleteWalk) => console.error({ errorFromDeleteWalk }));
  }

  render() {
    const myWalks = this.props.walks;
    const walkCards = myWalks.map((walk) => <Walk key={walk.id} walk={walk} deleteSingleWalk={this.deleteSingleWalk} />);

    return (
      <div className="Walks col-4">
        <div>{walkCards}</div>
      </div>
    );
  }
}

export default WalkTrack;
