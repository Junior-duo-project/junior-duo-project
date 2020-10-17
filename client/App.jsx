import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import BlogList from "./component/BlogList.jsx";
import SignUp from "./component/SignUp.jsx"
import UserBlogList from './component/userBlogList.jsx';
import CreateBlog from './component/CreateBlog.jsx';
import Login from './component/Login.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      users: [],
      ownBlogs: [],
      author: "",
      view: "logIn",
      currentUser: ""

    };
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.login = this.login.bind(this);
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

  login(email, pass) {

   

    $.ajax({
      url: '/api/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: email
      })
    }).then(s => this.setState({
      currentUser: s
    }))
    $.get('/api/blogs/' + this.state.currentUser, (data) => {
      console.log(this.state.currentUser)
      this.setState({
        ownBlogs: data
      })
      console.log(this.state.ownBlogs)
    })


    // for(let i=0;i<this.state.users.length;i++){
    //   if(this.state.users[i].email===email&&this.state.users[i].passWord===pass){
    //     this.changeView("blogList")
    //     }
    //     return alert('please sign up');
       
    // }
    
    this.changeView("blogList")
  }


  changeView(form) {
    this.setState({
      view: form
    })
  }

  renderView() {

    if (this.state.view === "blogList") {
      return <BlogList blogs={this.state.blogs} />
    } else if (this.state.view === "userBlogList") {
      return <UserBlogList changeview={this.changeView} ownBlogs={this.state.ownBlogs} />
    } else if (this.state.view === "create") {
      return <CreateBlog currentUser={this.state.currentUser} changeView={this.changeView} />
    } else if (this.state.view === "logIn") {
      return <Login login={this.login} />
    }
  }


  render() {
    return (
      <div>
        {(this.state.view === "logIn")?<div className="loginsign"><Login login={this.login}/>
        <SignUp users={this.state.users} changeView={this.changeView} SignUp={this.SignUp}/></div>:
        <div>
          <div>
            <ul>
              <li className="active">Blogging</li>
              <li onClick={() => this.changeView("create")}>Create Blog</li>
              <li onClick={() => this.changeView("userBlogList")}>My Blogs</li>
              <li onClick={() => this.changeView("blogList")} >See All Blogs</li>
              <li onClick={() => this.changeView("logIn")}>Log Out</li>
            </ul>
          </div>
          <div>
            <h1>Share your story and knowledge</h1>
            <div>
              {this.renderView()}
            </div>

          </div>
        </div>}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))