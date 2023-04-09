
import { useState } from "react";

import NavBar from "./NavBar";


const UpdateUser = ({user, currUser, setAnyUser, setCurrUser, setPost, setShowComment, 
  setPic, setExplore, setProfile, setProfileComment, setUpdate}) => {
    // in your React component

const [avatar, setAvatar] = useState(null);

const [showPost, setShowPost] = useState(false)

const handleAvatarChange = (event) => {
  setAvatar(event.target.files[0]);
};

const handleAvatarUpdate = () => {
  const formData = new FormData();
  formData.append('avatar', avatar);

  fetch(`/users/${currUser.id}/avatar`, {
    method: 'PUT',
    body: formData,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    });
};

return (
  <div>
    <div><NavBar setShowPost = {setShowPost} setAnyUser = {setAnyUser} currUser = {currUser}
         setCurrUser = {setCurrUser} setExplore = {setExplore} setProfile = {setProfile}
         setUpdate = {setUpdate}/>
         </div>
  </div>
);


}

export default UpdateUser
