import React from "react";

export default function PostItem({ Image, category, audthorId, title, des, postId }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={Image} alt="Post" />
      </div>
      <div className="post-body">
        <h3>{title}</h3>
        <p>{des}</p>
      </div>
      <div className="post-footer">
        <p>
          Category: <strong>{category}</strong>
        </p>
        <p>
          Author ID: <strong>{audthorId}</strong>
        </p>
      </div>
    </div>
  );
}
