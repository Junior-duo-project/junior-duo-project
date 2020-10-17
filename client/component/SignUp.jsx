import React from "react";
import $ from "jquery";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            country: "", 
        }

    }
    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    SignUp() {
        // let users = this.props.users;
        // for (let i = 0; i < users.length; i++) {
        //     if (users[i].name === this.state.name
        //         || users[i].email === this.state.email) {
        //         alert("this account already exist");
        //         return;
        //     }
        // }

        $.ajax({
            url: '/api/user',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                passWord: this.state.password,
                phoneNumber: this.state.phoneNumber,
                country: this.state.country
            })
        })

    }

    render() {
        return (
            <div className='sign'>
                <center>
               
                <input type="text" placeholder="Name" name="name" id="name" required onChange={this.myChangeHandler.bind(this)}></input><br/>
            
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={this.myChangeHandler.bind(this)}></input><br/>

             
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={this.myChangeHandler.bind(this)}></input><br/>

              
                <input type="number" placeholder="Phone Number" name="phone" id="phone" required onChange={this.myChangeHandler.bind(this)}></input><br/><br/>
    
                <input type="text" placeholder="Country" name="country" id="country" required onChange={this.myChangeHandler.bind(this)}></input><br/>
                <br />
                <button onClick={() => {this.SignUp(); this.props.changeView("blogList")}}>Sign Up</button>
                </center>
            </div>
        )
    }
}
export default SignUp;