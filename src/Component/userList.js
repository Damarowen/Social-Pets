import React from 'react';

const UserList = ({usernames, passFromProfileAndDirectory}) => {

  const handleClick = (event) => {
    passFromProfileAndDirectory(event.target.dataset.username);
    console.log(event.target)
  }

    return (
      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <button data-username={username} onClick={handleClick}>
              @{username}
            </button>
          </li>
        ))}
      </ul>
    );
  }

  export default UserList
