import React, { useState } from 'react'
import '../App.css'
const Home = () => {

    const [posts, setPosts] = useState([...Array(5)])

  return (
    <div className='posts'>


      {
        posts.map((e, i)=> (
            <div className='post'></div>
        ))

    
      }
    </div>
  )
}

export default Home