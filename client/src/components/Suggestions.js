import React, { useEffect, useState } from 'react'



const Suggestions = ({currUser}) => {


  const [users, setUsers] = useState([])




  const getUsers = () => {

    
    fetch('http://localhost:3000/users/suggested_users', {
      
    method: 'GET',

    headers: {

      

      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }

    })
    .then((response) => response.json())
    .then((data) => {
        
        console.log(data)
      
        setUsers(data)

        console.log(currUser)
        
    })
    .catch((error) => {
        console.log('Error:', error)
    })
}




useEffect(() => {

  getUsers()

},[])
  
  
 
  
  
  

  return (
    <div >

        <div className='suggestions'>
        <div className='suggestionsCurrUsers'>
          <img src = {currUser.avatar_url} className = "biggerAvatar"/> 
          <div className='suggestionUsername'>{currUser.username}</div>
          </div>

        <h3>Suggestions for you</h3>

        <div className='suggestedUsers'>
        {users.map((user) => {
          return(
            <div className='suggestedUser'>
              <img src = {user.avatar_url} className = 'avatar'/> <div>{user.username}</div>
              </div>
          )
        })
        
        }
        </div>
        
       </div>
        
    </div>
  )
}

export default Suggestions