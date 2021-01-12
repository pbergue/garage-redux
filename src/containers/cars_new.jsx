import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';

import LatMenu from '../components/lat_menu';

class CarsNew extends Component {

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }

  onSubmit = (values) => {
    this.props.createCar(values, this.props.garage, (car) => {
      this.props.history.push('/');
      return car;
    });
  }

  render() {
    return (
      <div className="container">
        <LatMenu garage={this.props.garage} return="true"/>
        <div className="content-custom">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field label="Brand" name="brand" type="text" component={this.renderField} />
            <Field label="Model" name="model" type="text" component={this.renderField} />
            <Field label="Owner" name="owner" type="text" component={this.renderField} />
            <Field label="Plate" name="plate" type="text" component={this.renderField} />
            <button className="btn btn-danger" type="submit"
            disabled={this.props.pristine || this.props.submitting}>
            Add this car
            </button>
          </form>
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     fetchCars
//   }, dispatch);
// }

export default reduxForm({ form: 'newPostForm' })(
  connect(mapStateToProps, { createCar })(CarsNew)
 );
