import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePosts() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbImage, setThumbImage] = useState(null);

  const postCategories = [
    "",
    "ICS Student Council",
    "CSS",
    "ISS",
    "SITE",
    "CICS-CNAG",
    "TGS",
    "CICS-PAX"
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      Image: thumbImage,
      category,
      audthorId: 2,
      title,
      des: description
    };
    const existingPosts = JSON.parse(localStorage.getItem("createdPosts")) || [];
    const updatedPosts = [newPost, ...existingPosts];
    localStorage.setItem("createdPosts", JSON.stringify(updatedPosts));
    setTitle("");
    setCategory("");
    setDescription("");
    setThumbImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setThumbImage(URL.createObjectURL(file));
  };

  return (
    <section className="createPosts">
      <div className="container form-container createPosts-container">
        <h2>Create Posts</h2>
        <form onSubmit={handleFormSubmit} className="form createPosts-form">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {postCategories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <ReactQuill modules={{ toolbar: [["bold", "italic", "underline"], ["link", "image"]] }} value={description} onChange={setDescription} />

          <input type="file" onChange={handleImageChange} accept="image/*" />

          <button type="submit">Create</button>
        </form>
      </div>
    </section>
  );
}
