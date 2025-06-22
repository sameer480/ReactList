import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    const newItem = {
      id: Date.now(), // unique ID based on timestamp
      name: trimmed
    };

    setItems(prevItems => [...prevItems, newItem]);
    setInputValue(''); // clear input
  };

  return (
    <div style={styles.container}>
      <h2>Shopping List</h2>

      <input
        type="text"
        value={inputValue}
        placeholder="Enter item"
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAddItem} style={styles.button}>
        Add Item
      </button>

      <ul>
        {items.map(item => (
          <li key={item.id} style={styles.listItem}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '16px',
    fontFamily: 'Arial, sans-serif'
  },
  input: {
    padding: '8px',
    marginRight: '8px'
  },
  button: {
    padding: '8px 12px'
  },
  listItem: {
    margin: '6px 0'
  }
};

export default ShoppingList;
//Create a functional component ShoppingList using useState to manage an array of items (objects with id and name). Include an input and button to add new items to the list. Render the list with map and ensure unique keys.