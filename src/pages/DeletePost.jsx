import { Link } from 'react-router-dom'

export default function DeletePost() {
  return (
    <section>
    <div className='error-center '>
      <h2>Post Deleted</h2>
      <Link to={'/'} className='btn btn-primary'>Return Home</Link>
    </div>
  </section>
  )
}
