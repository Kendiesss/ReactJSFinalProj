import { Link } from 'react-router-dom'
import ProfileImage from '../assets/blogImage1.jpg'
import { FaEdit } from "react-icons/fa";
import { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function UserProfile() {

  const [profileImage, setProfileImage] = useState('');

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setconfirmNewPassword] = useState();


  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  return (
    <section className='profile'>
      <div className='container profile-container'>
        <Link to={`/myposts/:id`}>My Posts</Link>
        <div className='profile-details form-container'>
          <div className='profile-wrapper'>
            <div className='profile-image'>
              <img src={ProfileImage} alt="" />
            </div>
            <form className='profile-image-form'>
              <input type="file" name='profile-image' id='profile-image' accept='png, jpg, jpeg' onChange={e => setProfileImage(e.target.files[0])} />
              {/* <label htmlFor="profile-image">
                <FaEdit/>
              </label> */}
            </form>
            <button className='profile-image-button'>
              <FaCheckCircle />
            </button>
          </div>
          <h2>Beg Joker</h2>

          <form action="" className="form profile-data-form">
            <p className="form-message">This is a invalid message</p>
            <input type="text" placeholder="Full Name" name="name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Current Password" name="currentPassword" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="text" placeholder="New Password" name="newPassword" value={newPassword} onChange={e => setnewPassword(e.target.value)} />
            <input type="text" placeholder="Confirm Password" name="confirmNewPassword" value={confirmNewPassword} onChange={e => setCurrentPassword(e.target.value)} />           
           <button type='submit' className='btn btn-primary'>Update Profile</button>
          </form>

        </div>
      </div>
    </section>
  )
}
