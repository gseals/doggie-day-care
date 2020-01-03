import React from 'react';
import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
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

  render() {
    const { walk } = this.props;

    return (
      <div className="card col-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{walk.date}</h5>
          <p className="card-text">Walker: {walk.firstName} {walk.lastName}</p>
          <p className="card-text">Dog: {walk.dog}</p>
          <button className="btn btn-danger" onClick={this.deleteSingleWalkEvent}>Delete</button>
      </div>
    </div>
  </div>
    );
  }
}

export default Walk;
