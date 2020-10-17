import React from "react";
import UserBlog from "./UserBlog.jsx";
 
class UserBlogList extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }

    }

    render() {
        return(
            <div>
            {this.props.ownBlogs.map((blog,i) => <UserBlog changeview={this.props.changeview} key = {i} blog = {blog}/> )}    
            </div>
        )
    }
}

export default UserBlogList;