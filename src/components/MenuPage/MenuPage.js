import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuButton from '../MenuButton';

class MenuPage extends Component {
  componentDidMount() {
    const restaurant = this.props.match.params.id;
    console.log('MenuPage menu: ', restaurant);
    // this.props.dispatch({ type: 'FETCH_MENUS' });
    this.props.dispatch({ type: 'FETCH_CHOSEN_MENU', payload: restaurant });
    this.props.history.push('/menuView')
  }

  chooseMenu = (event, menu) => {
    console.log(menu);
    this.props.dispatch({ type: 'FETCH_CHOSEN_MENU', payload: menu });
    this.props.history.push('/menuView')
  }


  render() {
    return (
      <div>
        {/* <div>
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
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MenuPage);