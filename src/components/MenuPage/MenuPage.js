import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuButton from '../MenuButton';

class MenuPage extends Component {
  // componentDidMount() {
  //   this.props.dispatch({ type: 'FETCH_MENUS', payload: this.props.state.restaurant[0].id });
  // }

  chooseMenu = (event, menu) => {
    console.log(menu);
    this.props.dispatch({ type: 'FETCH_CHOSEN_MENU', payload: menu });
    this.props.history.push('/menuView')
  }


  render() {
    return (
      <div>
        <div>
          <p>
            Here is a list of menus
          </p>
          <div className="buttonWrapper">
            {this.props.state.menu ?
              this.props.state.menu.map((menu) => {
                return <MenuButton chooseMenu={this.chooseMenu} key={`M${menu.id}`} menu={menu}></MenuButton>
              })
              :
              <p>no menus</p>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MenuPage);