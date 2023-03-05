import React, { useState } from 'react'
import '../App.css'
import img from './naruto.jpg'

const Home = () => {

    const [posts, setPosts] = useState([...Array(5)])

  return (
    <div className='posts'>


      {
        posts.map((e, i)=> (
            <div className='post'>
              <div><p>naruto</p></div>
              <div><img src = {img} alt = 'naruto'/></div>
              
            </div>
        ))

    
      }
    </div>
  )
}

export default Home

