import React from 'react';

const CategoryList = ({ categories = [] }) => {
  return (
    <div>
      {categories.map(category => (
        <div key={category.id} style={styles.category}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item, index) => (
              <li key={`${category.id}-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const styles = {
  category: {
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif'
  }
};

export default CategoryList;
