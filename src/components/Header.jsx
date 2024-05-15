import { Link } from "react-router-dom"
import { useState } from "react";

//import React Icons
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024 ? true : false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const closeNavHandler = () => {
    if (window.innerWidth < 1024) {
      setIsNavShow(false)
    } else {
      setIsNavShow(true)
    }
  }

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear user data, reset login status)
    setIsLoggedIn(false);
  }

  return (
    <nav>
      <div className='container nav-container'>
        <Link className="nav-logo" to={'/'} onClick={closeNavHandler} >
          <h3>Fire <span>Stack</span></h3>
        </Link>

        {isNavShow && <ul className="nav-menu">
          <li><Link to={'/profile/id'} onClick={closeNavHandler}>Beg Joker</Link></li>
          <li><Link to={'/create'} onClick={closeNavHandler}>Create Posts</Link></li>
          <li><Link to={'/authors'} onClick={closeNavHandler}>Authors</Link></li>
          <li><Link to={'/login'} onClick={handleLogout}>{isLoggedIn ? 'Logout' : 'Login'}</Link></li>
        </ul>}

        <button className="nav-toggle-button" onClick={() => setIsNavShow(!isNavShow)}>
          {
            isNavShow ? <AiOutlineClose /> : <FaBars />
          }
        </button>
      </div>
    </nav>
  )
}
