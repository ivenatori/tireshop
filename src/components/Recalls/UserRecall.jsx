import React from 'react';
import './UserRecall.css'
const UserRecall = ({elem}) => {

let userStyle = {
    color: 'white'
}


    return (
      
        <div className='message'>
            <span  className='user_message'><img src={elem.img} alt="" /><br />{elem.message}</span><br />
            
            <span style={userStyle} className='user'>{elem.user}</span>
        
        </div>
         
         
    );
};

export default UserRecall;