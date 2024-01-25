import { useState } from "react";
import { useDispatch } from "react-redux";
// import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

import React from 'react'

const AddPostForm = () => {

    const [title,setTitle] =useState('');

    const [content,setContent] =useState('');

    const dispatch = useDispatch();

    const onTitleChanged = (event)=>setTitle(event.target.value);

    const onContentChanged = (event)=>setContent(event.target.value);

   const onSavePostClick =()=>{
    if(title && content){
        dispatch(
             /* postAdded({
            id:nanoid(),
            title,
            content
         }) */

         postAdded(title,content)
      )
       setTitle('');
       setContent('');
    }
   }


 return (
    <section>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input 
            type="text"
            required
            placeholder="write your title here"
            id ="postTitle"
            name ="postTitle"
            value ={title}
            onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Post Content:</label>
            <textarea 
            type="text"
            placeholder="write your content here (150 characters)"
            required
            id="postContent"
            name="postContent"
            value ={content}   
            onChange={onContentChanged}
            />
            <button 
            type="button"
            onClick={onSavePostClick}
            >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm