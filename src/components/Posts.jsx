import { DummyPosts } from "../data/data"
import { useState } from "react"
import PostItem from "./PostItem"
import Headpost from "./Headpost"


export default function Posts() {
    const [posts, setPosts] = useState(DummyPosts)
  return (
    <section className="posts">

      <div className="head-post-aria">
        <Headpost/>
      </div>

      { posts.length > 0 ? <div className="container posts-container">
        {
          posts.map(({id, Image, audthorId, category, title, des}, index)=> 
         <PostItem key={index} Image={Image} category={category} audthorId={audthorId} title={title} des={des} postId={id}/>)
        }
      </div> : <h2 className="error-center">No Posts Found</h2>}
    </section> 
  )
}

//29.27