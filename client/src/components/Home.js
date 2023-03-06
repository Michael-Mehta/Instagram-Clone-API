import React, { useState } from 'react'
import '../App.css'
import img from './naruto.jpg'
import { BsHeart, BsChat } from 'react-icons/bs';

const Home = () => {

    const [posts, setPosts] = useState([...Array(5)])

  return (
    <div className='posts'>


      {
        posts.map((e, i)=> (
            <div className='post'>
              <div><p>naruto</p></div>
              <div className='picIcon'><img src = {img} alt = 'naruto'/>
              <div className='heart-comment'>
                <div>< BsHeart /></div>
              <div>< BsChat /></div>
              </div>
              </div>
              
            </div>
        ))

    
      }
    </div>
  )
}

export default Home

