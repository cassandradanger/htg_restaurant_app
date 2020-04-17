import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
// import debounce from "lodash.debounce";


class Search extends Component {
    // delayedCallback = debounce(this.ajaxCall, 400)
    // state = {
    // searchText: '',
    // results: []
    // }
    // to do - query call on tags not ajax
    // ajaxCall(event) {
    //     const value = event.target.value;

    //     if (value === '') {
    //       this.setState({ results: [] })
    //     } else {
    //     // TO DO - Connect to query to get relevant restuarants
    //       API.getRestaurants(event.target.value)
    //         .then(res => {
    //           this.setState({ results: res.data })
    //         })
    //         .catch(err => console.log(err));
    //     }
    //   }

    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchText: '',
            userSearchInput: '',
        };
    }

    handleChange = event => {
        this.setState({ userSearchInput: event.target.value });
    };

    // TO DO - CHANGE BELOW SET STATE TO A GET STATE INSTEAD. 
    // OR LOOK UP HOW TO GET AND USE STATE IN REACT (GOOGLE)
    handleUserInputSubmit = event => {
        // this.setState({ userSearchInput: event.target.value });
        let userValue = event.target.value;

        console.log("User input collected");
        console.log("______________________");

        if (userValue === '') {
            this.setState({ results: [] })
            console.log("No user value");
        } else {
            this.setState({ results: "Query ready" });
            console.log("This is my user value" + userValue);
        }
    }

    render() {
        return (
            <div>
                <div className="search-bar">
                    <h4>
                        Search Restaurants
                </h4>
                    <form>
                        <div className="dropdown" id="dropdown1">
                            <button className="dropbtn">Filter by Cuisine</button>
                            <div className="dropdown-content" id="search-dropdown">
                                <Link className="nav-link" to="/searchPage"><span>American</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>Mexican</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>French</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>African</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>Asian</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>Italian</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>Surprise Me</span></Link>
                            </div>
                        </div>

                        <div className="dropdown" id="dropdown2">
                            <button className="dropbtn">Carryout Options</button>
                            <div className="dropdown-content" id="search-dropdown">
                                <Link className="nav-link" to="/searchPage"><span>Delivery</span></Link>
                                <Link className="nav-link" to="/searchPage"><span>Takeout</span></Link>
                            </div>
                        </div>

                        {/* {this.state.userSearchInput ? 
                <Link className="nav-link" to="/searchPage">
                    <button id="submit-button" onClick={this.handleUserInputSubmit}>Go</button>
                </Link> :
                <button id="submit-button" onClick={this.handleUserInputSubmit}>Go</button>
                } */}

                        {/* <input 
                    id="search-text" 
                    name="searchText"
                    value={this.state.userSearchInput}
                    onChange={this.handleChange}
                /> */}
                    </form>

                    {/* <h1>Your userInput Is: {this.state.userSearchInput}</h1> */}

                </div>

                {/* <div>
            {this.state.results.length > 0 ? (
                <RestaurantList results={this.state.results} />
            ) : null}
            </div> */}
            </div>
        )
    }
}

export default Search;