import React, { useEffect, useState } from 'react'

const Comment = ({setShowComment, pic, post, currUser, setAnyUser, anyUser, setProfile, setExplore, profileComment}) => {


    const [body, setBody] = useState('');
    const [comments, setComments] = useState([]);
   
    const [userPost, setUserPost] = useState(false)

  
      
      
        useEffect(() => {
          fetch(`http://localhost:3000/posts/${post.id}/comments`)
            .then(response => response.json())
            .then(data =>  {setComments(data)
            console.log(data) })
            .catch(error => console.error(error));
            console.log(post.user_id)




            if (currUser.username === post.username){
                   setUserPost(true)
            }

            console.log(anyUser)

            
        }, [post]);
      



        



    const handleSubmit = () => {
        fetch(`http://localhost:3000/posts/${post.id}/comments`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('authToken')}`
            },
            body: JSON.stringify({
              comment: {
                content: body,
                
               
              }
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .then(comment => {
            // Do something with the created comment
          })
          .catch(error => {
            // Handle the error
          })
         
          
    }



    const handleProfile = () => {
      fetch(`http://localhost:3000/users/${post.user_id}`, {
          
        method: 'GET',
  
        headers: {
  
          
  
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
  
        })
        .then((response) => response.json())
        .then((data) => {
            
            console.log(data)
           
  
            setAnyUser(data)

            setShowComment(false)

            setExplore(false)
          
            setProfile(true)
            
        })
        .catch((error) => {
            console.log('Error:', error)
        })
  
  
  
        
  
       
    }
  




    return(
        <div className='followersCreateBackground'>

      
      <div className='x' onClick = {() => setShowComment(false)}>X</div>
      
     <div className='picComments'>
        <div className='imagePic'>
            <img src = {pic} alt = 'pic' className='commentPics'/>
        </div>
        <div className='comment'>

  
        <div>
        <div className='postTop' onClick={() => handleProfile()}><div>
          <img src = {profileComment? anyUser.avatar_url : post.user_avatar_url} 
        className = 'avatar'/></div>
            <div>{profileComment? anyUser.username : post.username}</div></div>
            {comments.map(comment => (
              <div key={comment.id}>

                <p>@{comment.user.username}</p>

                
                
                <p>{comment.content}</p>
              </div>

               
            ))
            
            
            }
          </div>

            <div  className='actualComment' >
   
        <textarea type = "text" name = "comment" id = "comment" 
         placeholder='add comment'
         value={body} onChange={(e) => setBody(e.target.value)}/>

         <p className='postcomment' onClick={() => handleSubmit()}>Post</p>
     
            </div>
        </div>
     </div>
     
      </div>
    )
}

export default Comment