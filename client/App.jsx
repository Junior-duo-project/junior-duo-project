import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import BlogList from "./component/BlogList.jsx";
//import Blog from "./components/Blog.jsx";



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            blogs: []
        };
        
    }
    componentDidMount(){
        const options = {
          method: 'get',
          url: 'api/blogs'
        };
        axios(options)
          .then(blogsData => {
            this.setState(() => ({
              blogs: blogsData.data
            }));
          })
          .catch(error => {
            console.error(error);
          })
      }
    render() {
        return(
            <div>
                <h1>your blog</h1>
            
                <BlogList blogs = {this.state.blogs}/>
                {this.state.blogs.map((blog, index) => <Blog key={index} createdAt={blog.createdAt} title={blog.title} description={blog.description} author={blog.author}/>)}
            
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'))