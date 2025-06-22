import React, { useState } from 'react';

const WishList = () => {
  const [wishes, setWishes] = useState([
    { id: 1, text: 'Travel to Japan' },
    { id: 2, text: 'Learn guitar' },
    { id: 3, text: 'Read 12 books this year' }
  ]);

  const handleRemove = (idToRemove) => {
    setWishes(prevWishes => prevWishes.filter(wish => wish.id !== idToRemove));
  };

  return (
    <div style={styles.container}>
      <h2>My Wish List</h2>
      <ul>
        {wishes.length === 0 ? (
          <p>No wishes yet!</p>
        ) : (
          wishes.map(wish => (
            <li key={wish.id} style={styles.listItem}>
              {wish.text}
              <button onClick={() => handleRemove(wish.id)} style={styles.button}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  listItem: {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '400px'
  },
  button: {
    marginLeft: '10px',
    padding: '4px 8px',
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default WishList;
//Write a functional component WishList using useState to manage a wishes array (objects with id and text). Render each wish with a "Remove" button that removes it from the list using filter. Ensure proper key usage.