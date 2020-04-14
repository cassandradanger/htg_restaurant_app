import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuSection from '../MenuSection';
import mockMenu from '../MenuPage/mockMenu';

class MenuView extends Component {

  render() {
    return (
      <div>
        <p>Menu Page</p>
        <p>{mockMenu.type}</p>
        {mockMenu.sections.map(section => (
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