import React from 'react';

const UserList = ({ users}) => {
  return (
    <div>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        users.map(user => (
          <div key={user.id}>
            {user.name}
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
//Write a functional component UserList that accepts a users prop (array of objects with id and name). Use map to render each user’s name in a <div> with a unique key. Style the divs as cards using CSS.