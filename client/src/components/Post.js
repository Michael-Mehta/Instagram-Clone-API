import React, { useEffect, useState } from 'react'
import '../App.css'
import img from './naruto.jpg'
import { BsHeart, BsChat } from 'react-icons/bs';


const Post = ({ oldPost, currUser}) => {
    const [liked, setLiked] = useState(oldPost.liked_by_current_user);
     
    const [likes, setLikes] = useState(0)

    const [post, setPost] = useState(oldPost)
    
    const [reload, setReload] = useState(false)

    const [ok, setOk] = useState(false)

    const [red, setRed] = useState(false)

    useEffect(() => {


        setLikes(post.likes_count)
  
    },[])



    const getPost = () => {

    

        fetch(`http://localhost:3000/posts/${post.id}`, {
          
        method: 'GET',
  
        headers: {
  
          
  
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
  
        })
        .then((response) => response.json())
        .then((data) => {
            
            console.log(data)
            console.log(data.image)
            setPost(data)
            setOk(true)
            
            
        })
        .catch((error) => {
            console.log('Error:', error)
        })

        {ok && setLikes(post.likes_count)}
        
        setOk(false)
    }
  

   
    
  
      
    
    const handleLikeClick = () => {
        if (liked) {
            // User has already liked the post - unlike it
            fetch(`http://localhost:3000/likes/${post.id}`,
                { method: 'DELETE',

                headers: { 
                    'Content-Type': 'application/json'
                 },


                body: JSON.stringify({ 
                'user_id': currUser.id ,
                'post_id': post.id })
            
            
            });

            

            
            setLiked(false)
            setRed(false)
            getPost()

        } else {
            // User hasn't liked the post yet - like it
            fetch(`http://localhost:3000/posts/${post.id}/likes`,
                { method: 'POST',

                headers: { 
                    'Content-Type': 'application/json'
                 },

                 body: JSON.stringify({ user_id: currUser.id , post_id: post.id })
                
                }
                
                )
                .then((response) => response.json())
                .then((data) => {
                    setLiked(true);
                    // Update the post object with the new likes_count value
                     
                     setRed(true)
                     getPost()
                     
                })
                .catch(error => console.error(error));
        }


    };



    return (
        <div className='post'>
            <div><p></p></div>
            <div className='picIcon'><img src={post.image} alt='naruto' />
                <div className='heart-comment'>

            {/* heart classes are switched due to initial glitch after 
            first click*/}
                    <div>< BsHeart className={red ? 'heart':'unheart'} 
                    onClick={() => handleLikeClick()} /></div>
                    <div>< BsChat /></div>
                </div>
                <div>Likes:{likes}</div>
                <div className='postDescription'>
                    <p>Description:{post.description}</p>
                </div>
            </div>

        </div>
    );


}

export default Post