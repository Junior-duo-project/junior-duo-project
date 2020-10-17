import React from "react";
import moment from "moment";
import $ from 'jquery';

class UserBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show:true,
            edited:false
        }
    }

    changeState(){
        this.setState({
            show:false
        })
    }

    delete(){
        $.ajax({
            url: '/api/blogs/'+this.props.blog._id,
            type: 'DELETE',
            success: function(result) {
                console.log(result)
            }
        });
    }

    // edit(){
    //     $.ajax({
    //         url: '/api/blogs/'+this.props.blog._id,
    //         type: 'PATCH',
    //         data: {status: 'some status'}
    //     });
    // }

    render() {
        return (
            <div>
                {(this.state.show)?
            < div className="userblog">
                <h1> {this.props.blog.title}</h1>
                <h3> {this.props.blog.description}</h3>
                <h4> {moment(this.props.blog.createdAt).fromNow()}</h4>
                <button onClick={()=>{this.delete();this.changeState()}}>Delete</button><button>Edit</button>
            </div>:null}
            </div>

        )
    }

}


export default UserBlog;