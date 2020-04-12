import React from 'react';
import { connect } from 'react-redux';

const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      HELLO! Your username is: { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <button onClick={() => props.dispatch({ type: 'LOGOUT' })}>
      Log Out
    </button>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserPage);
