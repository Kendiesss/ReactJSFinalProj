import { Link } from "react-router-dom";
import { HeadPost } from "../data/data";
import image from '../assets/FRASS.png';

export default function Headpost() {
  return (
    <article className="head-post" style={{ backgroundImage: `url(${image})` }}>
      {HeadPost.map(({ id, Image, authorId, title, des }, index) => {
        return (
          <div key={index} className="container head-post-container">
            <div className="post-content">
              <Link to={`posts/${authorId}`}>
                <h1>{title}</h1>
              </Link>
              <p>{des}</p>
            </div>
            <div className="post-image">
              <img src={Image} alt={title} />
            </div>
          </div>
        );
      })}
    </article>
  );
}
