import React from "react";
import UserBlog from "./UserBlog.jsx";
 
class UserBlogList extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            userBlogs: [],

        }

    }
    // componentDidMount(){
    //     $.get("/api/blogs" , (newData) => {
    //         this.setState({
    //           userBlogs: newData
    //         });
    //       })
    // }

    render() {
        return(
            <div>
            {this.state.userBlogs.map((blog,i) => <UserBlog key = {i} blog = {blog}/> )}    
            </div>
        )
    }
}

export default UserBlogList;