import React from 'react';
import dogShape from '../../helpers/propz/dogShape';
import './Dog.scss';

class Dog extends React.Component {
  static propTypes = {
    dogs: dogShape.dogShape,
  }

  render() {
    const { dog } = this.props;

    return (
      <div className="card col-4">
      <div className="card">
      <img src={dog.imageUrl} className="card-img-top" alt="dog"/>
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <p className="card-text">Owner: {dog.owner}</p>
          <p className="card-text">{dog.description}</p>
      </div>
    </div>
  </div>
    );
  }
}

export default Dog;
