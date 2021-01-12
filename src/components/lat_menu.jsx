import React from 'react';
import { Link } from 'react-router-dom';

const LatMenu = (props) => {
  if (props.return) {
    return (
      <div className="lat-menu">
        <h1>{props.garage}</h1>
        <Link to="/" className="btn btn-danger custom-but">
          Back to list
        </Link>
      </div>
    )
  } else {
    return (
      <div className="lat-menu">
        <h1>{props.garage}</h1>
        <Link to="/cars/new" className="btn btn-danger custom-but">
          Add a new car 🚗
        </Link>
      </div>
    );
  }
};

export default LatMenu;
