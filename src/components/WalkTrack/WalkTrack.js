import React from 'react';
import PropTypes from 'prop-types';
import './WalkTrack.scss';

import Walk from '../Walk/Walk';
import walkShape from '../../helpers/propz/walkShape';

class WalkTrack extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
  }

  render() {
    const myWalks = this.props.walks;
    const walkCards = myWalks.map((walk) => <Walk key={walk.id} walk={walk} />);

    return (
      <div className="Walks col-6">
        <div>{walkCards}</div>
      </div>
    );
  }
}

export default WalkTrack;
