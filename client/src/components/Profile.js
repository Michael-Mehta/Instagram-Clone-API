import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";

const Profile = ({user, currUser}) => {

    const [personal, setPersonal] = useState(false)

    useEffect(() => {


        if(user.username === currUser.username)
        {
            setPersonal(true)
        }

        
        console.log(user.avatar_url)
    },[]);
    



    return(
    <div>
         <div className='bio'><img src = {user.avatar_url} alt = "profile pic" className='profilePic' /><h2>User Profile: {user.username}</h2></div>
         {personal && <UpdateUser currUser = {currUser} />}
    </div>
    )
}


export default Profile