import React, { useState } from 'react'
import { AiOutlinePicture } from "react-icons/ai";

const CreatePost = ({setShowPost}) => {

   const [description, setDescription] = useState('')

   function handleSubmit(e){

   } 

  return (
    <div className='postCreateBackground'>

      
      <div className='x' onClick = {() => setShowPost(false)}>X</div>
      <div className='postBox'>

      <h1>Choose a photo to post</h1>

      < AiOutlinePicture className='createPic'/>

      <form onSubmit={(e) => handleSubmit(e)} className = "postForm">
        <input type = "file" name = "image" id = "image" />
      </form>
      </div>
    </div>
  )
}

export default  CreatePost
