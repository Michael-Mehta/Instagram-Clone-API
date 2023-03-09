import React, { useState } from 'react'
import { AiOutlinePicture } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

const CreatePost = ({setShowPost}) => {

   const [description, setDescription] = useState('')
   
   const [secondStage, setSecondStage] = useState(false)
   const [thirdStage, setThirdStage] = useState(false)
  

   function handleSubmit(){
         setSecondStage(true)
   } 

  function handleSecondSubmit(){

    setThirdStage(true)
    setSecondStage(false)

   }

   function handleFourthSubmit() {
     
   }

   const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value)
   }

  return (
    <div className='postCreateBackground'>

      
      <div className='x' onClick = {() => setShowPost(false)}>X</div>
      
     { !secondStage && !thirdStage && <div className='postBox'>

      <h1>Choose a photo to post</h1>

      < AiOutlinePicture className='createPic'/>

      <form onSubmit={(e) => handleSubmit(e)} className = "postForm">
        <input type = "file" name = "image" id = "image" />
        <button type = "submit" className='firstSubmitButton'>Submit</button>
      </form>
      </div>}

      {secondStage && 
      <div className='postBoxTwo'>

        <div className='topBox'>
          < BiArrowBack onClick={() => setSecondStage(false)} className = 'arrow'/> 
        <p onClick={()=> handleSecondSubmit()}>Next</p>
        </div>
        <div className='restBox'></div>



      </div>}

      {thirdStage && 
      <div className='postBoxThree'>

<div className='topBox'>
          < BiArrowBack onClick={() => setThirdStage(false)} className = 'arrow'/> 
        <p onClick={()=> handleSecondSubmit()}>Share</p>
        </div>
        <div className='finalPost'>
        <div className='restBoxTwo'></div>


        <form className='postFormTwo'>

          <textarea type = "text" name = "descriptions" id = "description" 
          placeholder='add description' className='secondInput' onChange={handleDescriptionChange}/>
     

        </form>
        </div>

      </div>
      }
    </div>
  )
}

export default  CreatePost
