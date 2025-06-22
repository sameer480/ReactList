import React from 'react';
import ItemList from './ItemList';
import UserList from './UserList';
import TodoList from './TodoList';
import ShoppingList from './ShoppingList';
import WishList from './WishList';
import CategoryList from './CategoryList';
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const sampleCategories = [
  {
    id: 1,
    name: 'Fruits',
    items: ['Apple', 'Banana', 'Mango']
  },
  {
    id: 2,
    name: 'Vegetables',
    items: ['Carrot', 'Broccoli', 'Spinach']
  }
];
 const sampleUsers = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  const sampleTodos = [
  { id: 1, task: 'Finish homework', priority: 'high' },
  { id: 2, task: 'Buy groceries', priority: 'medium' },
  { id: 3, task: 'Clean the room', priority: 'low' },
  { id: 4, task: 'Prepare project report', priority: 'high' }
];
const App = () => {
  

  return (
    <div>
      <h1>Fruits</h1>
      <ItemList items={fruits} />
      <UserList users={sampleUsers} />
       <TodoList todos={sampleTodos} />
       <ShoppingList />
         <WishList />
         <CategoryList categories={sampleCategories} />
    </div>
  );
};

export default App;
