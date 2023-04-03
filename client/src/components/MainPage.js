import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Suggestions from './Suggestions'
import CreatePost from './CreatePost'
import Comment from './Comment'
import Explore from './Explore'

const MainPage = ({currUser, token, setAnyUser, setCurrUser, post, setPost, pic, setPic, showPost,
setShowPost, showComment, setShowComment, setExplore, explore}) => {
  

  useEffect(() => {

    console.log(setExplore)
  },[]);
 
 
  return (
    <div>
      {showPost && < CreatePost setShowPost = {setShowPost} currUser = {currUser}/>}
      {showComment && <Comment setShowComment={setShowComment}
       pic = {pic} post = {post} currUser = {currUser}/> }

       {explore &&
         <Explore currUser = {currUser} setShowComment = {setShowComment}
        setPic = {setPic} setPost = {setPost} setAnyUser = {setAnyUser}
        setShowPost = {setShowPost} setCurrUser = {setCurrUser} setExplore = {setExplore} />
        }
      
   {!showPost && !showComment && !explore && <div className='mainpage'>

        <NavBar setShowPost = {setShowPost} setAnyUser = {setAnyUser} currUser = {currUser}
         setCurrUser = {setCurrUser} setExplore = {setExplore} />
        < Home token = {token} currUser = {currUser} setShowComment = {setShowComment} setPic = {setPic}
        setPost = {setPost} setAnyUser = {setAnyUser}/>
        < Suggestions />
       

    </div>
   }


    </div>
  )
}

export default MainPage