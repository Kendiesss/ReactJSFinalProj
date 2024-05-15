// CategoryPosts.jsx
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PostItem from "../components/PostItem";

export default function CategoryPosts() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("createdPosts")) || [];
    const filteredPosts = storedPosts.filter(post => post.category === category);
    setPosts(filteredPosts);
  }, [category]);

  return (
    <section className="categoryPosts">
      <h1 className="page-title">Category Posts: {category}</h1>
      { posts.length > 0 ? <div className="container categoryPosts-container">
        {
          posts.map(({ id, Image, authorId, category, title, des }, index) => 
            <PostItem key={index} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id} />)
        }
      </div> : <h2 className="error-center">No Posts Found</h2>}
    </section>
  );
}
