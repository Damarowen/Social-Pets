import React, { useState, useEffect } from 'react';
import { fetchUserData } from './DataFetcher';
import UserList from './userList.js';

const Profile = (props) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const loadUserData = () => {
      setUserData(null);
      fetchUserData(props.username, (userData) => {
        setUserData(userData);
      });
    }

    loadUserData()
console.log(props)
//*props trigger currentUserName
  }, [props])

  // componentDidUpdate(prevProps) {
  //   if (this.props.username !== prevProps.username) {
  //     cancelFetch(this.fetchID)
  //     this.loadUserData();
  //   }
  // }


  const isLoading = userData === null ? true : false;
  let name;
  let bio
  let friends

  let className = 'Profile';
  if (isLoading) {
    name = 'loading..'
    bio = 'hi..'
    className += ' loading';
    friends = []
  } else {
    name = userData.name
    bio = userData.bio
    friends = userData.friends
  }

  return (
    <div className={className}>
      <div className="profile-picture">
        {
          !isLoading && (
            <img src={userData.profilePictureUrl} alt="" />
          )
        }
      </div>
      <div className="profile-body">
        <h2>{name}</h2>
        <h3>@{props.username}</h3>
        <p>{bio}</p>
        <h3>My friends</h3>
        <UserList usernames={friends} onChoose={props.onChoose} />
      </div>
    </div>
  );
}

export default Profile


