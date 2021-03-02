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
  if (isLoading) {
    className += ' loading';
  }

  return (
    <div className={className}>
      { !isLoading && (
        <ProfileBody pilih={pilih} username={username} userData={userData} />
      )
      }
      { isLoading && (
        <h2>Tunggu dulu gannnn ...</h2>
      )
      }
    </div>

  );
}

export default Profile


