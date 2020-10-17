import React from "react";
import moment from "moment";
import $ from 'jquery';

class UserBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'show',
            title: "",
            description: ""
        }
        this.myChangeHandler = this.myChangeHandler.bind(this)
    }
    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    changeState(option) {
        this.setState({
            view: option
        })
    }

    delete() {
        $.ajax({
            url: '/api/blogs/' + this.props.blog._id,
            type: 'DELETE',
            success: function (result) {
                console.log(result)
            }
        });
    }

    edit() {
        let that=this
        console.log(this.state.title,this.state.description)
        $.ajax({
            url: '/api/blogs/' + this.props.blog._id,
            type: 'PATCH',
            data: {
                title: that.state.title,
                description: that.state.description
            }
        }).then(res=>console.log(res))
        this.props.changeview('blogList')
    }

    render() {
        return (
            <div>
                {(this.state.view === 'show') ?
                    <div className="blog">
                        <h1> {this.props.blog.title}</h1>
                        <h3> {this.props.blog.description}</h3>
                        <h4> {moment(this.props.blog.createdAt).fromNow()}</h4>
                        <button onClick={() => { this.delete(); this.changeState('hide') }}>Delete</button><button onClick={() => { this.changeState('update') }} >Edit</button>
                    </div> : (this.state.view === 'update') ? (<div>
                        <center>
                            <input name="title" defaultValue={this.props.blog.title} type="text" onChange={this.myChangeHandler}></input><br/>
                            <textarea name="description" rows="7" cols="80" type="textarea" defaultValue={this.props.blog.description}  onChange={this.myChangeHandler} ></textarea><br/>
                            <button onClick={this.edit.bind(this)}>save change</button>
                        </center>
                    </div>) : null}
                

            </div>

        )
    }

}


export default UserBlog;