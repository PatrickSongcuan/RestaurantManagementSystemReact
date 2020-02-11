import React, { Component } from 'react'; 
import Logo from '../../content/core/assets/img/react-logo-tran.png';
import { Login } from '../../service/UserService';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

class LoginPage extends  Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.getUsername.value;
        const password =  this.getPassword.value;
        
        const data = {
          id: new Date(),
          username,
          password,
          ipAddress: "127.0.0.1"
        }
        
        this.Login(data).then(x => { 
            console.log(x);
        });

        // this.props.dispatch({
        //     type:'SAVE_AUTH',
        //     data});

        this.getUsername.value = '';
        this.getPassword.value = '';
    }

    async Login(loginDetails){

        var data = {
            Username: loginDetails.username,
            Password: loginDetails.password,
            ipAddress: '127.0.0.1'
        } 

        const stateLogin = await Login(data);

        return stateLogin.data;
    }

    render() {
      return (
        <div className="container">
            <div className="row justify-content-center pt-6">
                <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="text-center mb-4">
                    <a href="index.html">
                        <img src={Logo} alt="Restaurant Admin Logo" height="150"></img>
                    </a>
                    <h1 className="mb-1">Welcome back</h1>
                    <span>Enter your account details below</span>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="username" name="username" placeholder="Username"  
                        ref={(input)=>this.getUsername = input}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" className="form-control" 
                        ref={(input)=>this.getPassword = input}
                        />
                        <small><a href="#">Forgot your password?</a>
                        </small>
                    </div>
                    <div className="form-group">
                        <button className="btn-block btn btn-primary" type="submit">Sign in</button>
                    </div>
                    </form>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="login-remember" />
                        <label className="custom-control-label text-small text-muted" htmlFor="login-remember">Keep me signed in</label>
                    </div>
                    <hr/>
                    <div className="text-center text-small text-muted">
                        <span>Don't have an account yet? 
                            <br/>
                            <NavLink to="/AddUser"> Create one </NavLink>
                        </span>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
      );
    }

  }

  export default connect()(LoginPage);