import React from "react";
import $ from "jquery";

class UserBlog extends React.Component {
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
        <h1> {this.props.title}</h1>
        <h2> {this.state.author}</h2>
        <h3> {this.props.description}</h3>
        <h4> {this.props.createdAt}</h4>


    </div>

        )
    }
    
}


export default UserBlog;