import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

class Search extends Component {

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

    constructor(props){
        super(props);
        this.state = { 
            results: [],
            userSearchInput: '',
        };
    }

    handleChange = event => {
        this.setState({ userSearchInput: event.target.value });
    };

    handleUserInputSubmit() {
        console.log("User input collected");
    }

    render() {
        return (
        <div>
            <div>
                Search Restaurants 
                <input 
                    id="search-text" 
                    value={this.state.userSearchInput}
                    onChange={this.handleChange}
                />

                {this.state.userSearchInput ? 
                <Link className="nav-link" to="/searchPage">
                    <button id="submit-button" onClick={this.handleUserInputSubmit}>Go</button>
                </Link> :
                <button id="submit-button" onClick={this.handleUserInputSubmit}>Go</button>
                }

                <div class="dropdown">
                    <button class="dropbtn">Filter by Cuisine</button>
                    <div class="dropdown-content" id="search-dropdown">
                        <Link className="nav-link" to="/searchPage"><span>American</span></Link>
                        <Link className="nav-link" to="/searchPage"><span>Mexican</span></Link>
                        <Link className="nav-link" to="/searchPage"><span>French</span></Link>
                        <Link className="nav-link" to="/searchPage"><span>African</span></Link>
                        <Link className="nav-link" to="/searchPage"><span>Asian</span></Link>
                        <Link className="nav-link" to="/searchPage"><span>Italian</span></Link>
                        <Link className="nav-link" to="/searchPage"><span>Surprise Me</span></Link>
                    </div>
                </div>

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