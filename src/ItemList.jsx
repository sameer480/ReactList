import React from 'react';

const ItemList = ({ items }) => {
  return (
    <div>
      <h3>Item List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
//Create a functional component ItemList that accepts an items prop (array of strings). Use map to render each item as a <li> in an unordered list. Ensure each list item has a unique key.