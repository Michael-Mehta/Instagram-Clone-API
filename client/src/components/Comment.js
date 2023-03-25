import React, { useState } from 'react'

const Comment = ({setShowComment, pic}) => {




    return(
        <div className='postCreateBackground'>

      
      <div className='x' onClick = {() => setShowComment(false)}>X</div>
      
     <div className='picComments'>
        <div className='commentpic'>
            <img src = {pic} alt = 'pic' />
        </div>
        <div className='comment'>

  
   
        <textarea type = "text" name = "comment" id = "comment" 
         placeholder='add comment' className='actualComment' />
     
        </div>
     </div>
     
      </div>
    )
}

export default Comment