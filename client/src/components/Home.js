import React, { useEffect, useState } from 'react'
import '../App.css'
import img from './naruto.jpg'
import { BsHeart, BsChat } from 'react-icons/bs';

const Home = () => {

    const [posts, setPosts] = useState([...Array(5)])


    const getPosts = () => {

    
      fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          console.log(data.image)
          
      })
      .catch((error) => {
          console.log('Error:', error)
      })
  }
  
  useEffect(() => {
  
      let mounted = true;
    
    
     getPosts()
    
    
      return () => (mounted = false);
    
    
    }, []);

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

