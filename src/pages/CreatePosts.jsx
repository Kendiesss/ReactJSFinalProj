import { useState } from "react"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function CreatePosts() {

const [title, setTitle] = useState('')
const [category, setCategory] = useState('')
const [description, setDescription] = useState('')
const [thumbImage, setThumbImage] = useState('')

const postCategories = ['ICS Student Council', 'CSS', 'ISS', 'SITE', 'CICS-CNAG', 'TGS', 'CICS-PAX'];


const modules = {
  toolbar: [
    [{'header' : [1,2,3,4,5,6, false]}],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list':'ordered'},{'list':'bullet'},{'indent':'+1'},{'indent':'-1'}],
    ['link','image']
  ]
}

const formats = [
  'header',
  'bold','italic','underline','blockquote',
  'list','bullet','indent',
  'link','image'
]

  return (
    <section className='createPosts'>
    <div className='container form-container createPosts-container'>
      <h2>Create Posts</h2>
      <form action="" className="form createPosts-form">
        <p className="form-message">This is a invalid message</p>
        <input type="text" placeholder="Title" name="title" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
        <select name="category" value={category} onChange={e => setCategory(e.target.value)}>
          {
            postCategories.map(cat => <option key={cat}>{cat}</option>)
          }
        </select>

        <ReactQuill modules={modules} formats={formats} value={description} onChange={e => setDescription(e.target.value)}/>

        <input type="file" value={thumbImage} onChange={e => setThumbImage(e.target.value)} accept='png, jpg, jpeg' />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  </section>
  )
}
