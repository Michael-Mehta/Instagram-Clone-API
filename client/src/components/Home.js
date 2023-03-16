import React, { useEffect, useState } from 'react'
import '../App.css'
import img from './naruto.jpg'
import { BsHeart, BsChat } from 'react-icons/bs';

const Home = () => {

    const [posts, setPosts] = useState([])


    const getPosts = () => {

    
      fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => {
          
          console.log(data)
          console.log(data[1].image)
          setPosts(data)
          
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
              <div><p></p></div>
              <div className='picIcon'><img src = {posts[i].image} alt = 'naruto'/>
              <div className='heart-comment'>
                <div>< BsHeart /></div>
              <div>< BsChat /></div>
              </div>
              <div className='postDescription'>
                <p>Description:{posts[i].description}</p>
                </div>
              </div>
              
            </div>
        ))

    
      }
    </div>
  )
}

export default Home

