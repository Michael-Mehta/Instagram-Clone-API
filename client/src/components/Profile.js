import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const Profile = ({user}) => {


    useEffect(() => {

        console.log(user)
    },[]);
    



    return(
    <div>
         <h2>User Profile: {user.username}</h2>
    </div>
    )
}


export default Profile