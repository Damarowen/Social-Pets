import React, { useState, useEffect } from 'react';
import  fetchUserData  from '../DataFetcher';
import UserList from './UserList';

const Profile = ({username, pilih}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const loadUserData = () => {
      setUserData(null);
      {
        // *fetchUserData = (username, callback)   
      }
      fetchUserData(username, (userData) => {
        setUserData(userData);
      });
    }

    loadUserData()
    //*props trigger currentUserName
  }, [username])

  const isLoading = userData == null ? true : false;
  let name;
  let bio
  let friends

  //* class default Profile
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
          //*IF NOT LOADING
          !isLoading && (
            <img src={userData.profilePictureUrl} alt="" />
          )
        }
      </div>
      <div className="profile-body">
        <h2>{name}</h2>
        <h3>@{username}</h3>
        <p>{bio}</p>
        <h3>My friends</h3>
        <UserList usernames={friends} passFromProfileAndDirectory={pilih} />
      </div>
    </div>
  );
}

export default Profile


