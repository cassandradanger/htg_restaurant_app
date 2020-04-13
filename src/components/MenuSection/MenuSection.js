import React from 'react';
import MenuItem from '../MenuItem';


const MenuSection = props => (
  <div>
    <h2>{props.section.name}</h2>
    <div>
      {props.section.items.map(item => (
        <MenuItem key={`I${item.id}`} item={item}></MenuItem>
      ))}
    </div>
  </div>
);

export default MenuSection;