import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';

import LatMenu from '../components/lat_menu';

class CarsIndex extends Component {
  componentDidMount(){
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return (
      this.props.cars.map( car => {
        return (
        <li key={car.id}>
          <Link to={`/cars/:${car.id}`} className="car-list-item">
            <div>
              <h2>{`${car.brand} ${car.model}`}</h2>
              <p>{`Owner: ${car.owner}`}</p>
              <p>{`Plate: ${car.plate}`}</p>
            </div>
            <img src={`https://source.unsplash.com/150x100/?${car.brand},${car.model}`} alt="car"/>
          </Link>
        </li>
        )
      })
    );
  }

  render() {
    return (
      <div className="container">
        <LatMenu garage={this.props.garage} />
        <div className="content-custom">
          <ul>
            {this.renderCars()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCars
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
