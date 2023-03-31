
import { useState } from "react";


const UpdateUser = (currUser) => {
    // in your React component

const [avatar, setAvatar] = useState(null);

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
    <input type="file" onChange={handleAvatarChange} />
    <button onClick={handleAvatarUpdate}>Update Avatar</button>
  </div>
);


}

export default UpdateUser
