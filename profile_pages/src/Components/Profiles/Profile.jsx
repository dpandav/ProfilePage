import React from 'react'
import'./Profile.css'
import'./Profile.css'

import profile_icon from '../Assets/2.png'
const Profile = () => {
  return (
    <div className='PG'>
            <div className="gradient"></div>
             <div className="profile_down">
                <img src={profile_icon} alt="person"></img>
                <div className="profile_title"><b>Mark Sen</b></div>
                <div className="profile_discription">Consultant
                Support lead consultants on client projects.</div>
            </div>
            <div className="profile button"><a href=''>Contact us</a></div>

    </div>
  )
}

export default Profile
