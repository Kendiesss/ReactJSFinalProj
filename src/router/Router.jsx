import React from 'react'
//Router......
import {BrowserRouter, Route, Routes } from "react-router-dom"

//components.....
import Header from '../components/Header'
import Footer from '../components/Footer'

//Pages......
import Home from '../pages/Home'
import Author from '../pages/Author'
import AuthorPosts from '../pages/AuthorPosts'
import CategoryPosts from '../pages/CategoryPosts'
import CreatePost from '../pages/CreatePosts'
import Dashboard from '../pages/Dashboard'
import DeletePost from '../pages/DeletePost'
import EditPosts from '../pages/EditPosts'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import PostDetail from '../pages/PostDetail'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'


export default function Router() {
  return (
    <>
    <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/authors' element={<Author/>}/>
                <Route path='/posts/user/:id' element={<AuthorPosts/>}/>
                <Route path='/posts/categories/:category' element={<CategoryPosts/>}/>
                <Route path='/create' element={<CreatePost/>}/>
                <Route path='/myposts/:id' element={<Dashboard/>}/>
                <Route path='/posts/:id/delete' element={<DeletePost/>}/>
                <Route path='/posts/:id/edit' element={<EditPosts/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/error' element={<ErrorPage/>}/>
                <Route path='/posts/:id' element={<PostDetail/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile/:id' element={<UserProfile/>}/>
            </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}
