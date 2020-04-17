import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemInputs from '../ItemInputs';

class AddMenu extends Component {
  state = {
    menuType: '',
    menuNote: '',
    items: [{ itemName: '', itemDescription: '', itemPrice: '', itemImageLink: '' }],
  };

  handleChange = (e) => {
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

  handleSubmit = (e) => { e.preventDefault() }

  render() {
    let { menuType, menuNote, items } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          {this.props.state.restaurant &&
           <h1>{this.props.state.restaurant[0].name}</h1>
          }
          <h3>Add a menu</h3>
          <div>
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
          <div>
            <label htmlFor="menuNote">Note:</label>
            <textarea
              type="text"
              name="menuNote"
              value={menuNote}
              className="menuNote"
            />
          </div>
          <button onClick={this.addItem}>Add new item</button>
          <ItemInputs items={items} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});


export default connect(mapStateToProps)(AddMenu);


