// PostDetails.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const createdPosts = JSON.parse(localStorage.getItem("createdPosts")) || [];
  const post = createdPosts.find((post) => post.id.toString() === id);

  if (!post) {
    return <h2 className="error-center">Post not found</h2>;
  }

  const handleDelete = () => {
    const updatedPosts = createdPosts.filter((post) => post.id.toString() !== id);
    localStorage.setItem("createdPosts", JSON.stringify(updatedPosts));
    window.location.href = "/"; // Redirect to home after deletion
  };

  return (
    <section>
      <div className="container PostDetail-container">
        <h1>{post.title}</h1>
        <p>{post.des}</p>
        <img src={post.Image} alt="" />
        <p>Category: {post.category}</p>
        <p>Author: {post.audthorId}</p>
        {/* Edit and Delete Buttons */}
        <div>
          <Link to={`/edit/${id}`} className="btn btn-sm btn-primary">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-sm btn-primary">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}
