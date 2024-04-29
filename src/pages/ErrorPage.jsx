import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <section>
      <div className='error-center '>
        <h2>404</h2>
        <h3>This Page Not Found!</h3>
        <Link to={'/'} className='btn btn-primary'>Return Home</Link>
      </div>
    </section>
  )
}
//27:47
