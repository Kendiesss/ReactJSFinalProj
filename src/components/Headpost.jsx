import { Link } from "react-router-dom"
import { HeadPost } from "../data/data"

export default function Headpost() {
    return (
        <article className="head-post">
            {
                HeadPost.map(({ id, Image, audthorId, title, des }, index) => {
                    return (
                        <div key={index} className="container head-post-container">
                            <div className="post-content">
                                <Link to={`posts/${audthorId}`}>
                                    <h1>{title}</h1>
                                </Link>
                                <p>{des}</p>
                            </div>
                            <div className="post-image">
                                <img src={Image} alt="" />
                            </div>
                        </div>
                    )
                })
            }

        </article>
    )
}
