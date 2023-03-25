import React, { useState } from 'react'

const Comment = ({setShowComment}) => {




    return(
        <div className='postCreateBackground'>

      
      <div className='x' onClick = {() => setShowComment(false)}>X</div>
      
     
     
      </div>
    )
}

export default Comment