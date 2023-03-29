import React, { useEffect, useState } from 'react'

const Comment = ({setShowComment, pic, post, currUser}) => {


    const [body, setBody] = useState('');
    const [comments, setComments] = useState([]);


      
      
        useEffect(() => {
          fetch(`http://localhost:3000/posts/${post}/comments`)
            .then(response => response.json())
            .then(data =>  {setComments(data)
            console.log(data) })
            .catch(error => console.error(error));
        }, [post]);
      





    const handleSubmit = () => {
        fetch(`http://localhost:3000/posts/${post}/comments`, {
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




    return(
        <div className='postCreateBackground'>

      
      <div className='x' onClick = {() => setShowComment(false)}>X</div>
      
     <div className='picComments'>
        <div className='commentpic'>
            <img src = {pic} alt = 'pic' />
        </div>
        <div className='comment'>

  
        <div>
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