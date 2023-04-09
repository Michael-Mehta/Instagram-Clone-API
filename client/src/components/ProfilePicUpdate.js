





const ProfilePicUpdate = ({setNewProfilePic}) => {
    return (
        <div className='followersCreateBackground'>

      

      <div className='newProfilePic'>
        <h1>Change Profile Photo</h1>
        <p className='uploadPhoto'>Upload Photo</p>
        <p className='cancel' onClick={() => setNewProfilePic(false)}>Cancel</p>
        </div>

    </div>
    )
}


export default ProfilePicUpdate