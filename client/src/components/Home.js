import React, { useEffect, useState } from 'react'
import Post from './Post';
import '../App.css'


const Home = ({token, currUser}) => {

  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  

    const [posts, setPosts] = useState([])


    const getPosts = () => {

    
      fetch('http://localhost:3000/posts', {
        
      method: 'GET',

      headers: {

        

        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }

      })
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
        posts.map((post, i)=> (
            <Post oldPost = {post}
             currUser = {currUser}
             />
        ))

    
      }
    </div>
  )
}

export default Home

