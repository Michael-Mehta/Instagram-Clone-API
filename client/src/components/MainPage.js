import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Suggestions from './Suggestions'

const MainPage = ({currUser}) => {
  return (
    <div className='mainpage'>

        <NavBar />
        < Home />
        < Suggestions />

    </div>
  )
}

export default MainPage