import React from "react";
import Blog from "./Blog.jsx"


const BlogList = (props) => (
  <div>
    
   {props.blogs.map((blog,i) => <Blog  key = {i} title = {blog.title} blogId = {blog._id} description = {blog.description} createdAt = {blog.createdAt} />)} 
     
  </div>
);

export default BlogList;