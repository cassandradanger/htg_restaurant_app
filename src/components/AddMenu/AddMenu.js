import React, { Component } from 'react';
import ItemInputs from '../ItemInputs';
import './AddMenu.css';

class AddMenu extends Component {
  state = {
    menuType: '',
    menuNote: '',
    items: [{ itemName: '', itemDescription: '', itemPrice: '', itemImageLink: '' }],
  };

  handleChange = (e) => {
    console.log('event: ', e);
    if (["itemName", "itemDescription", "itemPrice", "itemImageLink"].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ items }, () => console.log(this.state.items));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  addItem = (e) => {
    this.setState((prevState) => ({
      items: [...prevState.items, { itemName: '', itemDescription: '', itemPrice: '', itemImageLink: '' }]
    }));
  }

  handleSubmit = (e) => { 
    // e.preventDefault();
    this.props.history.push('/restaurantAdmin')
  }

  render() {
    let { menuType, menuNote, items } = this.state;
    return (
      <div>
        <header className="menuHeader">
          <h1>Add Menu</h1>
          <img alt="fork and spoon logo" src={require("../../assets/images/restaurant_darkblue.png")} />
        </header>

        <div className="menuWrapper">
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <div id="title1">
              <label htmlFor="menuType">Menu Type:</label>
              <select id="menuType"
                name="menuType"
                value={menuType}
                className="menuType"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Brunch">Brunch</option>
                <option value="Lunch">Lunch</option>
                <option value="Lunch/Dinner">Lunch/Dinner</option>
                <option value="Dinner">Dinner</option>
                <option value="All Day">All Day</option>
              </select>
            </div>
            <div id="title1">
              <label htmlFor="menuNote">Note:</label>
              <textarea
                type="text"
                name="menuNote"
                value={menuNote}
                className="menuNote"
              />
            </div>
            <ItemInputs items={items} />
            <div className="actionBar">
              <button id="newButton" className="addNew" onClick={this.addItem}>Add New Item</button>
              <button className="addNew" onClick={this.handleSubmit}>Save Menu</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddMenu;