import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
      <h2 className="nav-title">Restaurant App</h2>
      <Link className="nav-link" to="/home">
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      <Link className="nav-link" to="/restaurantsList">
        Restaurants List
      </Link>
      <Search />

      {/* this will only be seen if a user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/restaurantAdmin">
            Restaurant Admin Page
          </Link>
          <button onClick={() => props.dispatch({ type: 'LOGOUT' })}>
            Log Out
          </button>
        </>
      )}
    </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
