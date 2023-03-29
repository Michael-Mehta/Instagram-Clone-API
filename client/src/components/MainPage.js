import React, { useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Suggestions from './Suggestions'
import CreatePost from './CreatePost'
import Comment from './Comment'

const MainPage = ({currUser, token, setAnyUser}) => {
  const [showPost, setShowPost] = useState(false)
  const [showComment, setShowComment] = useState(false)
 
  const [pic, setPic] = useState('')
  const [post, setPost] = useState('')
  return (
    <div>
      {showPost && < CreatePost setShowPost = {setShowPost} currUser = {currUser}/>}
      {showComment && <Comment setShowComment={setShowComment}
       pic = {pic} post = {post} currUser = {currUser}/> }
      
   {!showPost && !showComment && <div className='mainpage'>

        <NavBar setShowPost = {setShowPost} setAnyUser = {setAnyUser} currUser = {currUser}/>
        < Home token = {token} currUser = {currUser} setShowComment = {setShowComment} setPic = {setPic}
        setPost = {setPost}/>
        < Suggestions />
       

    </div>
   }
    </div>
  )
}

export default MainPage