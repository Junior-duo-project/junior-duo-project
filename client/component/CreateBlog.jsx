import React from "react";
import $ from "jquery"
 
class CreateBlog extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title:"",
            description:"",
        }
    }
    addBlog(){
        
        $.ajax({
            url: '/api/blogs',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                author: this.props.currentUser
            })
        })
        this.props.changeView('blogList')
    }

    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    render() {
        return(
            <div>
                <center>
                <input type ="text" name="title" placeholder="Title" onChange= {this.myChangeHandler.bind(this)}></input><br/>
                <textarea rows="7" cols="80" type="textarea" name="description" placeholder ="Description" onChange= {this.myChangeHandler.bind(this)}></textarea><br/>
                <button onClick={()=>this.addBlog()}>Add blog</button>
                </center>
            </div>
        )
    }
}

export default CreateBlog;