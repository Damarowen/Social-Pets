import React from 'react';
import UserList from './userList';

const Directory = ({pilih}) => {
  return (
    <div className="Directory">
      <h2>User directory</h2>

      {
      //* display nama binantang 
      }
      <UserList
        usernames={['dog', 'cat', 'komodo']}
        passFromProfileAndDirectory={pilih}
      />

    </div>
  );
}



export default Directory