import PostAuthor from "../components/PostAuthor"
import { Link } from 'react-router-dom'
import postDtailImage from '../assets/blogImage1.jpg'

export default function PostDetail() {
  return (
    <section>
      <div className='container PostDtail-container'>
        <div className='postdtail-top'>
          <PostAuthor/>
          <div className="postdtail-buttons">
            <Link to={`/posts/werwer/edit`} className="btn btn-sm btn-primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn btn-sm btn-primary">
              Delete
            </Link>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <div className="postdtail-image">
          <img src={postDtailImage} alt="" />
        </div>
        <div className="postdtail-para">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic amet dolorem recusandae labore voluptate veniam exercitationem esse, maxime beatae itaque. Delectus accusamus alias consequuntur deserunt in impedit culpa quis! Ex!
        </p>
        </div>
      </div>
    </section>
  )
}
