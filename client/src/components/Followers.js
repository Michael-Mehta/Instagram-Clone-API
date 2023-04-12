import React, { useEffect, useState } from 'react'

import { BsXLg } from 'react-icons/bs';

const Followers = ({setShowFollowers, user, followings}) => {

  useEffect(() => {

    console.log(user)
  },[])

    return(

    <div className='followersCreateBackground'>

      <div onClick={() => setShowFollowers(false)}><BsXLg className='exit'/></div>

      {followings ? <div className='followers'>
        <div className='followers-heading'>Following</div>
        

        {
            user.following.map((follower) => {

                return(
                <div className='follower-list'>
                     <div><img src = {follower.avatar_url} alt = 'profile pic' className = 'avatar'/></div>
                     <div className='follower-username'>{follower.username}</div>
                </div>)
            })
        }
      </div> : 
      <div className='followers'>
      <div className='followers-heading'>Followers</div>
      

      {
          user.followers.map((follower) => {

              return(
              <div className='follower-list'>
                   <div><img src = {follower.avatar_url} alt = 'profile pic' className = 'avatar'/></div>
                   <div className='follower-username'>{follower.username}</div>
              </div>)
          })
      }
    </div>}

    </div>

    )
}


export default Followers