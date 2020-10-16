import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import BlogList from "./component/BlogList.jsx";
import SignUp from "./component/SignUp.jsx"
import UserBlogList from './component/userBlogList.jsx';
import CreateBlog from './component/CreateBlog.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      users: [],
      author: "",
      view: "signUp",
      currentUser:""

    };
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.checkCurrentUser = this.checkCurrentUser.bind(this);
  }
  componentDidMount() {
    $.get("/api/blogs", (newData) => {
      this.setState({
        blogs: newData
      });
    })
    $.get("/api/users", (newData) => {
      this.setState({
        users: newData
      });
    })
  }

  checkCurrentUser(user){
    this.setState({
      currentUser: user
    })
  }

  changeView(form) {
    this.setState({
      view: form
    })
  }

  renderView() {
    
    if (this.state.view === "signUp") {
      return <SignUp users={this.state.users} changeView = {this.changeView} checkCurrentUser = {this.checkCurrentUser}/>
    } else if (this.state.view === "blogList") {
      return <BlogList blogs={this.state.blogs} />
    } else if (this.state.view === "userBlogList") {
      return <UserBlogList />
    } else if (this.state.view === "create") {
      return <CreateBlog currentUser = {this.state.currentUser} changeView = {this.changeView}/>
    }

  }


  render() {
    return (
      <div>
        <div>
          <ul>
            <li className="active">Blogging</li>
            <li onClick={() =>this.changeView("create")}>Create Blog</li>
            <li onClick={()=>this.changeView("userBlogList")}>My Blogs</li>
            <li onClick={()=>this.changeView("blogList")} >See All Blogs</li>
            <li onClick={()=>this.changeView("signUp")}>Log Out</li>
          </ul>
        </div>
        <div>
          <h1>Share your story and knowledge</h1>
          <div>
            {this.renderView()}
          </div>

        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))