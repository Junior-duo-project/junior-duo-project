import React from 'react';




class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            pass:""
        }
    }

    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }



    render(){
        return(
            <div className="sign">
                <input name="email" placeholder='Enter email' type="email" onChange={ this.myChangeHandler.bind(this)}/>
                <input name='pass' placeholder='Enter password' type="password"onChange={ this.myChangeHandler.bind(this)}/><br/>
                <button onClick={()=>this.props.login(this.state.email,this.state.pass)} >log in</button>
            </div>
        )
    }


}

export default Login;