import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import NavBar from './NavBar';
import Post from './Post';

const Profile = ({user, currUser, setAnyUser, setCurrUser, setPost, setShowComment, setPic}) => {

    const [showPost, setShowPost] = useState(false)
    const [personal, setPersonal] = useState(false)
    const [profile, setProfile] = useState(true)
    const [following, setFollowing] = useState(false)
    const [posts, setPosts] = useState([])
    const [change, setChange] = useState(true)
    const [newUser, setNewUser] = useState(user)

    useEffect(() => {


        if(user.username === currUser.username)
        {
            setPersonal(true)

            
        }


        currUser.following.map((follow) => {
            if (follow.id === user.id)
            {
                setFollowing(true)
            }
        })


        fetch(`http://localhost:3000/users/${user.username}`, {
        
      method: 'GET',

      headers: {

        

        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
      }

      })
      .then((response) => response.json())
      .then((data) => {
          
          console.log(data)
         

          setNewUser(data)
        
          
          
      })
      .catch((error) => {
          console.log('Error:', error)
      })

        
        console.log(user.avatar_url)
        setChange(false)
    },[change]);




    const handleFollow = () => {

        fetch(`http://localhost:3000/profile/${user.id}/follow`, {
            
        
        method: 'POST',

        headers: {

            'Authorization': `Bearer ${localStorage.getItem('authToken')}`

        }

        }).catch((error) => {
            console.log('Error:', error)
        })

        
        setFollowing(true)
        setChange(true)
    }




    const handleUnfollow = () => {

        fetch(`http://localhost:3000/profile/${user.id}/unfollow`, {
            
        
        method: 'POST',

        headers: {

            'Authorization': `Bearer ${localStorage.getItem('authToken')}`

        }

        }).catch((error) => {
            console.log('Error:', error)
        })

        setFollowing(false)
        setChange(true)
    }


    


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
         <div className='bio'><div className='bio-image'><img src = {user.avatar_url} alt = "profile pic" className='profilePic' /></div><div className='bio-rest'><div className='bio-top'><h2>{user.username}</h2>
         {!personal && !following && <button className="follow-button" onClick = {() => handleFollow()}>Follow</button>}
         {!personal && following && <button className='unfollow-button' onClick={() => handleUnfollow()}> Unfollow</button>}</div>
        <div className='bio-follow'><div>{newUser.followers.length} Followers</div><div>{newUser.following.length} Following</div></div></div></div>
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