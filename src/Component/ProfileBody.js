import UserList from './UserList'


const ProfileBody = ({ userData, pilih, username }) => {


    const name = userData.name
    const bio = userData.bio
    const friends = userData.friends

    return (
        <div className="profile-body">
            <div className="profile-picture">
                <img src={userData.profilePictureUrl} alt="" />
            </div>
            <div className="profile-body">
                <h2>{name}</h2>
                <h3>@{username}</h3>
                <p>{bio}</p>
                <h3>My friends</h3>
                <UserList usernames={friends} passFromProfileAndDirectory={pilih} />
            </div>
        </div>
    )
}

export default ProfileBody





