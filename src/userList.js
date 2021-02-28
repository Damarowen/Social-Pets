import React from 'react';

const UserList = (props) => {

  const handleClick = (event) => {
    props.onChoose(event.target.dataset.username);
    console.log(event.target)
  }

    return (
      <ul>
        {props.usernames.map((username) => (
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
