import React from 'react';
import './MenuItem.css';


const MenuItem = props => (
  <div className="menuItem">
    <h3>
      <span>{props.item.name}</span><span>{props.item.price}</span>
    </h3>
    <div className="description">{props.item.description}</div>
  </div>
);

export default MenuItem;