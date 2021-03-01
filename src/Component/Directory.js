import React from 'react';
import UserList from './userList';

const Directory = (props) => {
  return (
    <div className="Directory">
      <h2>User directory</h2>

      {
      //* display nama binantang 
      }
      <UserList
        usernames={['dog', 'cat', 'komodo']}
        passFromProfileAndDirectory={props.pilih}
      />

    </div>
  );
}



export default Directory