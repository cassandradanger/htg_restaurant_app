import React from 'react';


const MenuItem = props => (
  <div>
    <h3>
      <span>{props.item.name}</span><span>{props.item.price}</span>
    </h3>
    <div>{props.item.description}</div>
  </div>
);

export default MenuItem;