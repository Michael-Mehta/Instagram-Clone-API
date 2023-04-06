import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Suggestions from './Suggestions'
import CreatePost from './CreatePost'
import Comment from './Comment'
import Explore from './Explore'
import Profile from './Profile'
import Followers from './Followers'

const MainPage = ({currUser, token, setAnyUser, setCurrUser, post, setPost, pic, setPic, showPost,
setShowPost, showComment, setShowComment, setExplore, explore, profile, setProfile, anyUser}) => {
  

  const [profileComment, setProfileComment] = useState(false)
  

  
 
 
  return (
    <div>
      {showPost && < CreatePost setShowPost = {setShowPost} currUser = {currUser}/>}
      {showComment && <Comment setShowComment={setShowComment}
       pic = {pic} post = {post} currUser = {currUser} setAnyUser = {setAnyUser}
       anyUser = {anyUser} setProfile = {setProfile} setExplore = {setExplore} 
       profileComment = {profileComment}/> }

       {explore &&
         <Explore currUser = {currUser} setShowComment = {setShowComment}
        setPic = {setPic} setPost = {setPost} setAnyUser = {setAnyUser}
        setShowPost = {setShowPost} setCurrUser = {setCurrUser} setExplore = {setExplore}
        setProfile = {setProfile} setProfileComment = {setProfileComment} />
        }

        {profile && <Profile user = {anyUser} currUser = {currUser}
         setAnyUser = {setAnyUser} setCurrUser = {setCurrUser} setPost = {setPost}
         setPic = {setPic} setShowComment = {setShowComment} setExplore = {setExplore}
          setProfile = {setProfile} setProfileComment = {setProfileComment} />
        
        }


        
      
   {!showPost && !explore && !profile && <div className='mainpage'>

        <NavBar setShowPost = {setShowPost} setAnyUser = {setAnyUser} currUser = {currUser}
         setCurrUser = {setCurrUser} setExplore = {setExplore} setProfile = {setProfile}/>
        < Home token = {token} currUser = {currUser} setShowComment = {setShowComment} setPic = {setPic}
        setPost = {setPost} setAnyUser = {setAnyUser} setProfile = {setProfile} setProfileComment = {setProfileComment}/>
        < Suggestions />
       

    </div>
   }


    </div>
  )
}

export default MainPage