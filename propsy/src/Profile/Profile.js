import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

export const Profile = (props) => {
    console.log('props' , props)

//destructuring props
const {fullName , Professions , bio, handeleAlert} = props

  return (
   <div>
    
            <div className="card p-3 py-4">
                
                <div className="img">
                    {props.children}
                </div>
                
                <div className="name">
                   
                    {fullName}
                    </div>
                    <div className='pro'>
                    <h3>Professions:{Professions}</h3>
                    </div>
                    <div className="bio">
                        <h4>biography:{bio}</h4>
                    
                    </div>
                    
                     
                    
                    <div className="buttons">
                        
                        <button className="btn btn-outline-primary px-4">Message</button>
                        <button className="btn btn-primary px-4 ms-3">Contact</button>
                    </div>
            </div>
            <button onClick={()=>props.handeleAlert(fullName)} >try a click</button>
</div>
  )
}


Profile.defaultProps={
    name:"nothing to add"
}

Profile.prototype ={
    fullName: propTypes.string,
    Professions: propTypes.string,
    bio:propTypes.string
}



 export default Profile 