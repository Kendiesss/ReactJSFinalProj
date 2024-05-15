import { useState } from "react"
import { Link } from 'react-router-dom'

export default function Login({ setIsLoggedIn }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded check for login credentials (replace with actual login logic)
    if (userData.email === 'example@example.com' && userData.password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <section className='login'>
      <div className='container login-container form-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form register-form">
          <p className="form-message">This is an invalid message</p>
          <input type="email" placeholder="Email" name="email" value={userData.email} onChange={changeInputHandle} />
          <input type="password" placeholder="Password" name="password" value={userData.password} onChange={changeInputHandle} />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        <small>Don't have an account? <Link to={`/register`}>Register</Link></small>
      </div>
    </section>
  )
}
