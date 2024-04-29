import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className='container footer-container'>
      <ul className='footer-category'>
        <li><Link to={'/post/catergories/ICS Student Council'}>ICS Student Council</Link></li>
        <li><Link to={'/post/catergories/CSS'}>CSS</Link></li>
        <li><Link to={'/post/catergories/ISS'}>ISS</Link></li>
        <li><Link to={'/post/catergories/SITE'}>SITE</Link></li>
        <li><Link to={'/post/catergories/CICS-CNAG'}>CICS-CNAG</Link></li>
        <li><Link to={'/post/catergories/TGS'}>TGS</Link></li>
        <li><Link to={'/post/catergories/CICS-PAX'}>CICS-PAX</Link></li>
      </ul>

      <div className='footer-copyright'>
        <small> &copy; Copyright All Rights Reserved || GroupName</small>
      </div>

      </div>

    </footer>
  )
}
