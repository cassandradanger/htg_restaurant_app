import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

// protected routes are only for logged in users
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import MenuPage from '../MenuPage';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import RestaurantAdminPage from '../RestaurantAdminPage/RestaurantAdminPage';
import RestaurantView from '../RestaurantView/RestaurantView';
import Geolocation from '../geolocation/geolocation'
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import MenuView from '../MenuView';
import AddMenu from '../AddMenu/AddMenu';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
    this.props.dispatch({ type: 'FETCH_RESTAURANTS' });
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

            <ProtectedRoute
              exact
              path="/addMenu"
              component={AddMenu}
            />

            <Route
              exact
              path="/menuPage"
              component={MenuPage}
            />

            <Route
              exact
              path="/MenuView"
              component={MenuView}
            />

            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
