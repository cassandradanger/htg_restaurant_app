import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';

class AddMenu extends Component {
  state = {
    menuType: '',
    menuNote: '',
    sections: [],
    sectionName: '',
    items: [],
    itemName: '',
    itemDescription: '',
    itemPrice: '',
    itemImageLink: ''
  };

  addNewMenu = (event) => {
    event.preventDefault();
    console.log(this.props.state)
    if (this.props.state.user.id) {
      this.props.dispatch({
        type: 'ADD_NEW_MENU',
        payload: {
          menuType: this.state.menuType,
          menuNote: this.state.menuNote,
          sections: this.state.sections,
          items: this.state.items,
        }
      })
      this.props.history.push('/addMenu');
    } else {
      this.props.dispatch({ type: 'MENU_INPUT_ERROR' });
    }
  } // end add Menu

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addNewMenu}>
          <h1>Add a menu</h1>
          <div>
            <label htmlFor="menuType">Menu Type:</label>
            <select id="menuType"
              name="menuType"
              value="{this.state.menuType}"
              onChange={this.handleInputChangeFor('menuType')}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Brunch">Brunch</option>
              <option value="Lunch">Lunch</option>
              <option value="Lunch/Dinner">Lunch/Dinner</option>
              <option value="Dinner">Dinner</option>
              <option value="All Day">All Day</option>
            </select>
          </div>
          <div>
            <label htmlFor="menuNote">
              Note:
            <input
                type="text"
                name="menuNote"
                value={this.state.menuNote}
                onChange={this.handleInputChangeFor('menuNote')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="sectionName">
              Section Name:
              <input
                type="text"
                name="sectionName"
                value={this.state.sectionName}
                onChange={this.handleInputChangeFor('sectionName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="itemName">
              Item Name:
              <input
                type="text"
                name="itemName"
                value={this.state.itemName}
                onChange={this.handleInputChangeFor('itemName')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="itemDescription">
              Item Description:
              <input
                type="text"
                name="itemDescription"
                value={this.state.itemDescription}
                onChange={this.handleInputChangeFor('itemDescription')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="itemPrice">
              Item Price:
              <input
                type="integer"
                name="itemPrice"
                value={this.state.itemPrice}
                onChange={this.handleInputChangeFor('itemPrice')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="itemImageLink">
              Item Image Link:
              <input
                type="text"
                name="itemImageLink"
                value={this.state.itemImageLink}
                onChange={this.handleInputChangeFor('itemImageLink')}
              />
            </label>
          </div>

          <div>
            <input
              className="addNew"
              type="submit"
              name="submit"
              value="Add New Menu"
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


export default connect(mapStateToProps)(AddMenu);

