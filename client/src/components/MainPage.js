import React, { useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Suggestions from './Suggestions'
import CreatePost from './CreatePost'
import Comment from './Comment'

const MainPage = ({currUser, token, setAnyUser, setCurrUser, post, setPost, pic, setPic, showPost,
setShowPost, showComment, setShowComment}) => {
  
 
 
  return (
    <div>
      {showPost && < CreatePost setShowPost = {setShowPost} currUser = {currUser}/>}
      {showComment && <Comment setShowComment={setShowComment}
       pic = {pic} post = {post} currUser = {currUser}/> }
      
   {!showPost && !showComment && <div className='mainpage'>

        <NavBar setShowPost = {setShowPost} setAnyUser = {setAnyUser} currUser = {currUser}
         setCurrUser = {setCurrUser} />
        < Home token = {token} currUser = {currUser} setShowComment = {setShowComment} setPic = {setPic}
        setPost = {setPost}/>
        < Suggestions />
       

    </div>
   }
    </div>
  )
}

export default MainPage