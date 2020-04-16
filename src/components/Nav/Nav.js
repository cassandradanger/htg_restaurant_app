import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
       
      <Link className="nav-item" to="/restaurantsList">
        <img alt="fork and spoon logo" src={require("../../assets/images/Restaurant_finderLogo.png")}/>
      </Link>

      {/* this will only be seen if a user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-item" to="/restaurantsList">
            Restaurants List
          </Link>
          <Link className="nav-item" to="/restaurantAdmin">
            Restaurant Admin Page
          </Link>
          <button className="nav-item" onClick={() => props.dispatch({ type: 'LOGOUT' })}>
            Log Out
          </button>
        </>
      )}
      {!props.user.id &&
        <Link className="nav-item2" to="/home">
          Restaurant Login
        </Link>
      }
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
