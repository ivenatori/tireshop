import React from 'react';
import './UserRecall.css'
const UserRecall = ({elem}) => {



    let one = Math.floor(Math.random()*255)
    let two = Math.floor(Math.random()*255)
    let three = Math.floor(Math.random()*255)
let userStyle = {
    color: `rgb(${one},${two},${three})`
}


    return (
      
        <div className='message'>
            <span  className='user_message'><img src={elem.img} alt="" /><br />{elem.message}</span><br />
            
            <span style={userStyle} className='user'>{elem.user}</span>
        
        </div>
         
         
    );
};

export default UserRecall;