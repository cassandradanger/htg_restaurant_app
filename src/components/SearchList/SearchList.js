import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, withRouter } from 'react-router-dom';
import './SearchList.css';


class SearchList extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SEARCH_RESTAURANTS' });
  }

  chooseRestaurant = (event, restaurant) => {
    console.log(restaurant);
    this.props.dispatch({ type: 'FETCH_CHOSEN_RESTAURANT', payload: restaurant });
    this.props.history.push('/restaurantView')
  }
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2 className="header-text">
              Filter Results
          </h2>
            <div className="row">
              <div className="search-list-column-1">
                <div className="search-restaurant-cards">
                  <br />
                  <p className="header">Sechuan Lilypad</p>
                  <p className="address-one">1321 Henry Street</p>
                  <p className="address-two">Roseville, MN 56575</p>
                  <p className="phone">651-278-9829</p>
                </div>
                <div className="search-restaurant-cards">
                  <br />
                  <p className="header">Lotus Flower</p>
                  <p className="address-one">1321 Cherry Blossom Rd</p>
                  <p className="address-two">New Brighton, MN 87899</p>
                  <p className="phone">652-987-3847</p>
                </div>
                <div className="search-restaurant-cards">
                  <br />
                  <p className="header">Old Shanghai</p>
                  <p className="address-one">1321 Cherry Blossom Rd</p>
                  <p className="address-two">New Brighton, MN 87899</p>
                  <p className="phone">652-987-3847</p>
                </div>
                <div className="search-restaurant-cards">
                  <br />
                  <p className="header">Demera</p>
                  <p className="address-one">1321 Cherry Blossom Rd</p>
                  <p className="address-two">New Brighton, MN 87899</p>
                  <p className="phone">652-987-3847</p>
                </div>
                <div className="search-restaurant-cards">
                  <br />
                  <p className="header">Old Chicago</p>
                  <p className="address-one">1321 Cherry Blossom Rd</p>
                  <p className="address-two">New Brighton, MN 87899</p>
                  <p className="phone">652-987-3847</p>
                </div>
              </div>

              <div className="search-list-column-2">
                <div className="search-restaurant-card-result">
                  <br />
                  <img src="https://www.revivalrestaurants.com/img/revival-minneapolis.jpg" alt="Restaurant food" className="featured-restaurant-img"></img>
                  <h3 id="revival">Revival</h3>
                  <p className="address-one">1321 Henry Street</p>
                  <p className="address-two">Roseville, MN 56575</p>
                  <p className="phone">651-278-9829</p>
                  <br />
                  <strong>
                    <a href="/restaurantsList" className="link-text">View menu and hours</a>
                  </strong>
                </div>
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </Router>
    )
  }
}


const mapStateToProps = state => ({
  state
});

export default withRouter(connect(mapStateToProps)(SearchList));