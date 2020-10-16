import React from "react";
import $ from "jquery";

class Blog extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
          author:""
      }
    }
    componentDidMount(){
        $.get("/api/author/" + this.props.blogId , (newData) => {
            this.setState({
            author : newData
            });
          })
    }
    render(){
        return(
            < div className = "blog">
        <h3> {this.props.title}</h3>
        <h4> {this.state.author}</h4>
        <p> {this.props.description}</p>
        <p> {this.props.createdAt}</p>


    </div>

        )
    }
    
}


export default Blog;

