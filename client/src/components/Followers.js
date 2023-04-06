import React, { useEffect, useState } from 'react'

import { BsXLg } from 'react-icons/bs';

const Followers = ({setShowFollowers, user}) => {

    return(

    <div className='followersCreateBackground'>

      <div onClick={() => setShowFollowers(false)}><BsXLg className='exit'/></div>

      <div className='followers'>
        <div className='followers-heading'>Followers</div>
        

        {
            user.followers.map((follower) => {

                return(
                <div className='follower-list'>
                     <div><img src = {user.avatar_url} alt = 'profile pic' className = 'avatar'/></div>
                     <div className='follower-username'>{follower.username}</div>
                </div>)
            })
        }
      </div>

    </div>

    )
}


export default Followers