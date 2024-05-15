import { Link } from 'react-router-dom'

export default function Logout({ setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <section>
      <div className='error-center '>
        <h2>Log Out</h2>
        <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
        <Link to={'/'} className='btn btn-primary'>Return Home</Link>
      </div>
    </section>
  )
}