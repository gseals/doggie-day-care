import React from 'react';
import PropTypes from 'prop-types';
import './DogPen.scss';

import Dog from '../Dog/Dog';
import dogShape from '../../helpers/propz/dogShape';


class DogPen extends React.Component {
  static propTypes = {
    dogs: PropTypes.arrayOf(dogShape.dogShape),
  }

  render() {
    const myDogs = this.props.dogs;
    const dogCards = myDogs.map((dog) => <Dog key={dog.id} dog={dog} />);

    return (
      <div className="Dogs container">
        <div>{dogCards}</div>
      </div>
    );
  }
}

export default DogPen;
