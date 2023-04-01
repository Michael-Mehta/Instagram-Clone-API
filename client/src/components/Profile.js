import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import NavBar from './NavBar';
import Post from './Post';

const Profile = ({user, currUser, setAnyUser, setCurrUser, setPost, setShowComment, setPic}) => {

    const [showPost, setShowPost] = useState(false)
    const [personal, setPersonal] = useState(false)
    const [profile, setProfile] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {


        if(user.username === currUser.username)
        {
            setPersonal(true)
        }

        
        console.log(user.avatar_url)
    },[]);




    


    const getPosts = () => {

    
      fetch(`http://localhost:3000/users/${user.id}/posts`, {
        
      method: 'GET',

      headers: {

        

        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }

      })
      .then((response) => response.json())
      .then((data) => {
          
          console.log(data)
        
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

    



    return(
    <div className='profilePage'>
          <div><NavBar setShowPost = {setShowPost} setAnyUser = {setAnyUser} currUser = {currUser}
         setCurrUser = {setCurrUser}/>
         </div>
         <div>
         <div className='bio'><img src = {user.avatar_url} alt = "profile pic" className='profilePic' /><h2>User Profile: {user.username}</h2></div>
         {personal && <UpdateUser currUser = {currUser} />}




         <div className='postsProfile'>

         {
        posts.map((post, i)=> (
            <Post 
            post = {post}
             currUser = {currUser}
             setShowComment = {setShowComment}
             setPic = {setPic}
             setPost = {setPost}
             profile = {profile}
             />
        ))

    
      }
      </div>
     
    </div>
    </div>
    )
}


export default Profile