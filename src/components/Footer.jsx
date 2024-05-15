// Footer.jsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className='container footer-container'>
        <ul className='footer-category'>
          <li><Link to={'/categoryposts/ICS Student Council'}>ICS Student Council</Link></li>
          <li><Link to={'/categoryposts/CSS'}>CSS</Link></li>
          <li><Link to={'/categoryposts/ISS'}>ISS</Link></li>
          <li><Link to={'/categoryposts/SITE'}>SITE</Link></li>
          <li><Link to={'/categoryposts/CICS-CNAG'}>CICS-CNAG</Link></li>
          <li><Link to={'/categoryposts/TGS'}>TGS</Link></li>
          <li><Link to={'/categoryposts/CICS-PAX'}>CICS-PAX</Link></li>
        </ul>

        <div className='footer-copyright'>
          <small> &copy; Copyright All Rights Reserved || GroupName</small>
        </div>

      </div>

    </footer>
  )
}
