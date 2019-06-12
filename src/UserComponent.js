import React from 'react';
const UserComponent = ({user})=>{
    return(
   
           <tr>
          <td>{user.name} </td>
          <td>{user.username} </td>
        <td>{user.email} </td>
        <td>{user.phone} </td>
        </tr>
    
    )
}
export default UserComponent;