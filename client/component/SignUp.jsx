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
            signIn: "singnIn",
            user: ""
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
                <label htmlFor="name"><b>Name: </b></label>
                <input type="text" placeholder="Name" name="name" id="name" required onChange={this.myChangeHandler.bind(this)}></input><br/>
                <label  htmlFor="email"><b>Email: </b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={this.myChangeHandler.bind(this)}></input><br/>

                <label  htmlFor="psw"><b>Password: </b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={this.myChangeHandler.bind(this)}></input><br/>

                <label  htmlFor="number"><b>Phone Number: </b></label>
                <input type="number" placeholder="Phone Number" name="phone" id="phone" required onChange={this.myChangeHandler.bind(this)}></input><br/><br/>
                <label  htmlFor="country"><b>Country: </b></label>
                <input type="text" placeholder="Country" name="country" id="country" required onChange={this.myChangeHandler.bind(this)}></input><br/>
                <br />
                <button onClick={() => {this.SignUp(); this.props.changeView("blogList"); this.props.checkCurrentUser(this.state.user)}}>Sign Up</button>

            </div>
        )
    }
}
export default SignUp;