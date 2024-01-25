
import {useSelector} from "react-redux";
import {selectAllPosts} from './postsSlice'
import React from 'react'


const PostsList = () => {
  
    const posts =useSelector(selectAllPosts);

    const renderedPosts = posts.map(post=>(
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,150)}</p>
      </article>
    ))
//  console.log(renderedPosts)
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList