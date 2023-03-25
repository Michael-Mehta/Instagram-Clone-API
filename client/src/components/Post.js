import React, { useEffect, useState } from 'react'
import '../App.css'
import img from './naruto.jpg'
import { BsHeart, BsChat } from 'react-icons/bs';


const Post = ({ post, currUser}) => {
    const [liked, setLiked] = useState(post.liked_by_current_user);
     
    const [likes, setLikes] = useState(0)

    
    const [reload, setReload] = useState(false)

    const [ok, setOk] = useState(false)

    const [red, setRed] = useState(false)

    useEffect(() => {


        setLikes(post.likes_count)
  
    },[])



    

   
    
  
      
    
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

            

            setLikes(likes - 1)
            setLiked(false)
            setRed(false)
       

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
                     setLikes(likes + 1)
                     setRed(true)
                 
                     
                })
                .catch(error => console.error(error));
        }


    };



    return (
        <div className='post'>
            <div><p></p></div>
            <div className='picIcon'><img src={post.image} alt='naruto' />
                <div className='heart-comment'>

          
                    <div>< BsHeart className={red ? 'unheart':'heart'} 
                    onMouseDown={() => handleLikeClick()} /></div>
                    <div>< BsChat /></div>
                </div>
                <div>Likes:{likes}</div>
                <div className='postDescription'>
                    <p>Description:{post.description}</p>
                </div>
                <div className='addComment'>
                    <p>Add a comment</p>
                </div>
            </div>

        </div>
    );


}

export default Post