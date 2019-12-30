import React from 'react';
import dogShape from '../../helpers/propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dogs: dogShape.dogShape,
  }

  render() {
    const { dogs } = this.props;

    return (
      <div className="Dog col-4">
      <div className="card">
      <img src={dogs.imageUrl} className="card-img-top" alt="{dogs.name}"/>
        <div className="card-body">
          <h5 className="card-title">{dogs.name}</h5>
          <p className="card-text">Owner: {dogs.owner}</p>
          <p className="card-text">{dogs.description}</p>
      </div>
    </div>
  </div>
    );
  }
}

export default Dog;
