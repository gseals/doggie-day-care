import React from 'react';
import walkShape from '../../helpers/propz/walkShape';
import './Walk.scss';

class Walk extends React.Component {
  static propTypes = {
    walks: walkShape.walkShape,
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
      </div>
    </div>
  </div>
    );
  }
}

export default Walk;
