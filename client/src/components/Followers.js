import React, { useEffect, useState } from 'react'

import { BsXLg } from 'react-icons/bs';

const Followers = ({setShowFollowers}) => {

    return(

    <div className='followersCreateBackground'>

      <div onClick={() => setShowFollowers(false)}><BsXLg className='exit'/></div>

    </div>

    )
}


export default Followers