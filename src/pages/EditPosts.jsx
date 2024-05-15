import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function EditPosts() {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [des, setDescription] = useState('');
  const [Image, setThumbImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("createdPosts")) || [];
    const currentPost = posts.find((post) => post.id === postId);
    if (!currentPost) {
      navigate("/");
      return;
    }
    setPost(currentPost);
    setTitle(currentPost.title);
    setCategory(currentPost.category);
    setDescription(currentPost.des);
    setThumbImage(currentPost.Image);
  }, [postId, navigate]);

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = { ...post, title, category, des, Image };

    let posts = JSON.parse(localStorage.getItem("createdPosts"));
    posts = posts.map(p => (p.id === postId ? updatedPost : p));
    localStorage.setItem("createdPosts", JSON.stringify(posts));

    navigate(`/postdetails/${postId}`);
  };

  return (
    <section className='editPost'>
      <div className='container form-container editPost-container'>
        <h2>Edit Posts</h2>
        <form onSubmit={handleSubmit} className="form editPost-form">
          <input type="text" placeholder="Title" name="title" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
          <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          <option value={category}>{category}</option>
            <option value="ICS Student Council">ICS Student Council</option>
            <option value="CSS">CSS</option>
            <option value="ISS">ISS</option>
            <option value="SITE">SITE</option>
            <option value="CICS-CNAG">CICS-CNAG</option>
            <option value="TGS">TGS</option>
            <option value="CICS-PAX">CICS-PAX</option>
          </select>

          <ReactQuill value={des} onChange={handleDescriptionChange} />

          <input type="file" onChange={e => setThumbImage(URL.createObjectURL(e.target.files[0]))} accept='image/*' />

          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </section>
  );
}
