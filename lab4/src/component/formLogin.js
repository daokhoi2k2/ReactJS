import React from "react";
export default class FormLogin extends React.Component {
    constructor() {
        super();
        this.state = { username: "", password: "" };
    }
    getUsername = (e) => {
        this.state.username = e.target.value;
        console.log(this.state);
    }
    getPassword = (e) => {
        this.state.password = e.target.value;
        console.log(this.state);
    }
    render() {
        const kq =
            <form action="">
                <h1>LOGIN</h1>

                <input id="username" type="text" className="form-control uinput" placeholder="Username" onChange={this.getUsername} />
                <small></small>
                <span></span>
                <input id="password" type="password" className="form-control " placeholder="Password" onChange={this.getPassword} />
                <small></small>
                <span></span>


                <button type="submit" className="btn-submit">Login</button>

                <div className="signup-link">
                    not a member? <a href="#">Signup</a>
                </div>
            </form>
        return (kq);
    }
}