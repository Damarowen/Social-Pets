import React from 'react';
import UserList from './userList.js';

export function Directory(props) {
  return (
    <div className="Directory">
      <h2>User directory</h2>

      {
      //* display nama binantang 
      }
      <UserList
        usernames={['dog', 'cat', 'komodo']}
        onChoose={props.onChoose}
      />

    </div>
  );
}