import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

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
          phone: this.state.phone,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zipcode: this.state.zipcode,
          hours: this.state.hours,
          link: this.state.link,
          welcomeNote: this.state.welcomeNote,
          description: this.state.description,
          picture: this.state.picture,
          delivery: this.state.delivery,
        }
      })
      this.props.history.push('/restaurantAdmin');
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  

  render() {
    return(
      <div>
        <form onSubmit={this.addNewRestaurant}>
          <h1>Add a restaurant</h1>
          <div>
            <label htmlFor="name">
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChangeFor('name')}
              />
            </label>
          </div>
          <div>
          <label htmlFor="type">Food Type:</label>
            <select id="type" name="type">
              <option value="American">American</option>
              <option value="Italian">Italian</option>
              <option value="Vietnemese">Vietnemese</option>
              <option value="Ethiopian">Ethiopian</option>
            </select>
          </div>
          <div>
            <label htmlFor="username">
              Phone Number:
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="address">
             Street Address:
              <input
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="city">
             City:
              <input
                type="text"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChangeFor('city')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="state">
             State:
              <input
                type="text"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChangeFor('state')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="zipcode">
             Zipcode:
              <input
                type="integer"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleInputChangeFor('zipcode')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="hours">
             Hours of Operation:
              <input
                type="text"
                name="hours"
                value={this.state.hours}
                onChange={this.handleInputChangeFor('hours')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="link">
             Link:
              <input
                type="text"
                name="link"
                value={this.state.link}
                onChange={this.handleInputChangeFor('link')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="welcomeNote">
             Welcome Note for Customers:
              <input
                type="text"
                name="welcomeNote"
                value={this.state.welcomeNote}
                onChange={this.handleInputChangeFor('welcomeNote')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
             Restaurant Description:
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleInputChangeFor('description')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="picture">
             Picture URL:
              <input
                type="text"
                name="picture"
                value={this.state.picture}
                onChange={this.handleInputChangeFor('picture')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="delivery">
             Delivery Available:
              <input
                type="radio"
                name="delivery"
                value='true'
                onChange={this.handleInputChangeFor('delivery')}
              />
            </label>
            <label htmlFor="delivery">
            No Delivery:
              <input
                type="radio"
                name="delivery"
                value='false'
                onChange={this.handleInputChangeFor('delivery')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="pickUp">
             Pick Up Available:
              <input
                type="radio"
                name="pickUp"
                value='true'
                onChange={this.handleInputChangeFor('pickUp')}
              />
            </label>
            <label htmlFor="pickUp">
             No Pick Up:
              <input
                type="radio"
                name="pickUp"
                value='false'
                onChange={this.handleInputChangeFor('pickUp')}
              />
            </label>
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
