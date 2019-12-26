import React, { useState, useEffect } from 'react';
import axios from 'axios'


const Profile = ({ match }) => {
    const [userID] = useState(match.params.user_id);
    const [user, setUser] = useState({});
  
    useEffect(() => {
        axios.get(`https://coetus.herokuapp.com/api/forum/users/${userID}`)
        .then(data => {
          if (data.data.success) {
            setUser(data.data.user);
          } else {
            console.log('user',data);
          }
        })
    }, [userID])
  console.log('userrr', user)
    return (
      <div className='container'>
        <span><strong>Username: </strong>{user.username}</span>
        <br />
        <span><strong>First Name: </strong>{user.name}</span>
        <br />
        <span><strong>Last Name: </strong>{user.surname}</span>
      </div>
    )
  }
  
  export default Profile;