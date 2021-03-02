import React, { useState, useEffect } from 'react';
import fetchUserData from '../DataFetcher';
import ProfileBody from './ProfileBody';

const Profile = ({ username, pilih }) => {

  const [userData, setUserData] = useState(null)

  // *fetchUserData = (username, callback)   
  useEffect(() => {
    const loadUserData = () => {
      setUserData(null);

      fetchUserData(username, (userData) => {
        setUserData(userData);
      });
    }

    loadUserData()
    //*props trigger currentUserName
  }, [username])

  const isLoading = userData == null ? true : false;


  //* class default Profile
  let className = 'Profile';
  let body = (
    <ProfileBody pilih={pilih} username={username} userData={userData} />
  )

  if (isLoading) {
    className += ' loading';
    body = (
      <h2>Tunggu dulu gannnn ...</h2>
    )
  }

  return (
    <div className={className}>
      {body}
    </div>

  );
}

export default Profile


