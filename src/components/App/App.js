import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

// protected routes are only for logged in users
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import RestaurantAdminPage from '../RestaurantAdminPage/RestaurantAdminPage';
import RestaurantView from '../RestaurantView/RestaurantView';
import AddRestaurant from '../AddRestaurant/AddRestaurant';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'});
    this.props.dispatch({type: 'FETCH_RESTAURANTS'});
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/restaurantsList"
              component={RestaurantsList}
            />
            <Route
              exact
              path="/restaurantView"
              component={RestaurantView}
            />

            <ProtectedRoute
              exact
              path="/home"
              component={RestaurantAdminPage}
            />
            
            <ProtectedRoute
              exact
              path="/restaurantAdmin"
              component={RestaurantAdminPage}
            />

            <ProtectedRoute
              exact
              path="/addRestaurant"
              component={AddRestaurant}
            />
            
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
