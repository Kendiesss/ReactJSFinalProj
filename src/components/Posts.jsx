import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem";
import Headpost from "./Headpost";

export default function Posts() {
  const [createdPosts, setCreatedPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("createdPosts")) || [];
    setCreatedPosts(storedPosts);
  }, []);

  return (
    <section className="posts">
      <div className="head-post-aria">
        <Headpost />
      </div>
      {createdPosts.length > 0 ? (
        <div className="container posts-container">
          {createdPosts.map(({ id, Image, audthorId, category, title, des }) => (
            <Link
              to={{
                pathname: `/postdetails/${id}`,
                state: {
                  post: { id, Image, audthorId, category, title, des }
                }
              }}
              key={id}
              className="post-link"
            >
              <PostItem
                Image={Image}
                category={category}
                audthorId={audthorId}
                title={title}
                des={des}
                postId={id}
              />
            </Link>
          ))}
        </div>
      ) : (
        <h2 className="error-center">No Posts Found</h2>
      )}
    </section>
  );
}
