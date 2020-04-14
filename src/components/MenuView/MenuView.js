import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuSection from '../MenuSection';

class MenuView extends Component {
  render() {
    return (
      <div>
        <p>Menu Page</p>
        <p>{this.props.state.menu.type}</p>
        {this.props.state.menu.sections && this.props.state.menu.sections.map(section => (
          <MenuSection key={`S${section.id}`} section={section}></MenuSection>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(MenuView);