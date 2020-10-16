import React from "react";

const Blog = ({ title, author, description, createdAt }) => (
    < div>
        <h1> {props.title}</h1>
        <h2> {props.author}</h2>
        <h3> {props.description}</h3>
        <h4> {props.createdAt}</h4>


    </div>
);

export default Blog;

