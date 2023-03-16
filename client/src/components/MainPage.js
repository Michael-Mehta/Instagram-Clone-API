import React, { useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Suggestions from './Suggestions'
import CreatePost from './CreatePost'

const MainPage = ({currUser}) => {
  const [showPost, setShowPost] = useState(false)
  return (
    <div>
      {showPost && < CreatePost setShowPost = {setShowPost} currUser = {currUser}/>}
   {!showPost && <div className='mainpage'>

        <NavBar setShowPost = {setShowPost}/>
        < Home />
        < Suggestions />
       

    </div>
   }
    </div>
  )
}

export default MainPage