import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddRestaurant.css';


class AddRestaurant extends Component {
  state = {
    name: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    hours: '',
    link: '',
    welcomeNote: '',
    description: '',
    picture: '',
    delivery: false,
    pickUp: false,
  };

  addNewRestaurant = (event) => {
    event.preventDefault();
    console.log(this.props.state)
    if (this.props.state.user.id) {
      this.props.dispatch({
        type: 'ADD_NEW_RESTAURANT',
        payload: {
          name: this.state.name,
          phone: parseInt(this.state.phone),
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zipcode: parseInt(this.state.zipcode),
          hours: this.state.hours,
          link: this.state.link,
          welcomeNote: this.state.welcomeNote,
          description: this.state.description,
          picture: this.state.picture,
          delivery: this.state.delivery,
        }
      })
      this.props.history.push('/AddMenu');
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }


  render() {
    return (
      <div className="formWrapper">
        <p>Hi!
        Thank you for adding your restaurant to our database.
        Our goal is to help diners find restaurants and order dishes easily.
        We are asking you to provide accurate information.
        Please make sure to update the information on your restaurant as soon as there are changes.
        Thank you.
          </p>
        <form onSubmit={this.addNewRestaurant}>
          <div>
            <label htmlFor="type">Restaurant Cuisine Type*</label>
            <select id="type" name="type">
              <option value="American">American</option>
              <option value="Italian">Italian</option>
              <option value="Vietnemese">Vietnemese</option>
              <option value="Ethiopian">Ethiopian</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChangeFor('name')}
            />
            <label htmlFor="name">
              Restaurant Name*
            </label>
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChangeFor('phone')}
            />
            <label htmlFor="username">
              Phone Number*
            </label>
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChangeFor('address')}
            />
            <label htmlFor="address">
              Street Address
            </label>
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChangeFor('city')}
            />
            <label htmlFor="city">
              City
            </label>
          </div>
          <div>
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleInputChangeFor('state')}
            />
            <label htmlFor="state">
              State
            </label>
          </div>
          <div>
            <input
              type="integer"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleInputChangeFor('zipcode')}
            />
            <label htmlFor="zipcode">
              Zipcode
            </label>
          </div>
          <div>
            <input
              type="text"
              name="hours"
              value={this.state.hours}
              onChange={this.handleInputChangeFor('hours')}
            />
            <label htmlFor="hours">
              Hours of Operation
            </label>
          </div>
          <div>
            <input
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.handleInputChangeFor('link')}
            />
            <label htmlFor="link">
              Website URL
            </label>
          </div>
          <div>
            <input
              type="text"
              name="picture"
              value={this.state.picture}
              onChange={this.handleInputChangeFor('picture')}
            />
            <label htmlFor="picture">
              Main Image URL
            </label>
          </div>
          <div>
            <input
              type="text"
              name="welcomeNote"
              value={this.state.welcomeNote}
              onChange={this.handleInputChangeFor('welcomeNote')}
            />
            <label htmlFor="welcomeNote">
              Welcome Note for Customers
            </label>
          </div>
          {/* <div>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChangeFor('description')}
            />
            <label htmlFor="description">
              Restaurant Description
            </label>
          </div> */}
          <div className="radioWrapper">
            <div>
              <label htmlFor="delivery">
                Delivery Available
              </label>
              <input
                type="radio"
                name="delivery"
                value='true'
                onChange={this.handleInputChangeFor('delivery')}
              />
              <label htmlFor="delivery">
                No Delivery
              </label>
              <input
                type="radio"
                name="delivery"
                value='false'
                onChange={this.handleInputChangeFor('delivery')}
              />
            </div>
          </div>
          <div className="radioWrapper">
            <div>
              <label htmlFor="pickUp">
                Pick Up Available
              </label>
              <input
                type="radio"
                name="pickUp"
                value='true'
                onChange={this.handleInputChangeFor('pickUp')}
              />
              <label htmlFor="pickUp">
                No Pick Up
              </label>
              <input
                type="radio"
                name="pickUp"
                value='false'
                onChange={this.handleInputChangeFor('pickUp')}
              />
            </div>
          </div>

          <div>
            <input
              className="addNew"
              type="submit"
              name="submit"
              value="Add New Restaurant"
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});


export default connect(mapStateToProps)(AddRestaurant);
