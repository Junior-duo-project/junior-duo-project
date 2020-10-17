import React from "react";
import Blog from "./Blog.jsx";
import $ from 'jquery'


class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    $.get("/api/blogs", (newData) => {
      this.setState({
        blogs: newData
      });
    })
  }
  render() {
    return (
      <div>

        {this.state.blogs.map((blog, i) => <Blog key={i} title={blog.title} blogId={blog._id} description={blog.description} createdAt={blog.createdAt} />)}

      </div>
    )
  }

}

export default BlogList;