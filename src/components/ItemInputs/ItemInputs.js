import React from 'react';
import './ItemInputs.css';

const ItemInputs = (props) => {
  return (
    props.items.map((val, idx) => {
      let itemId = `item-${idx}`
      let desId = `des-${idx}`
      let priceId = `price-${idx}`
      let imageId = `image-${idx}`

      return (
        <div key={idx}>
          <label htmlFor={itemId}>Item #{idx + 1} Name</label>
          <input
            type="text"
            name={itemId}
            data-id={idx}
            id={itemId}
            value={props.items[idx].itemName}
            className="itemName"
          />

          <div className="itemDetails">
            <label htmlFor={desId}>Description</label>
            <input
              type="text"
              name={desId}
              data-id={idx}
              id={desId}
              value={props.items[idx].itemDescription}
              className="itemDescription"
            />
            <label htmlFor={priceId}>Price</label>
            <input
              type="text"
              name={priceId}
              data-id={idx}
              id={priceId}
              value={props.items[idx].itemPrice}
              className="itemPrice"
            />
            <label htmlFor={imageId}>Image URL</label>
            <input
              type="text"
              name={imageId}
              data-id={idx}
              id={imageId}
              value={props.items[idx].itemImageLink}
              className="itemImageLink"
            />
          </div>
        </div>
      )
    })
  )
}

export default ItemInputs