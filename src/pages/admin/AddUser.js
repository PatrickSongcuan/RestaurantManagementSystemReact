import React, { Component } from 'react'; 
import Logo from '../../content/core/assets/img/react-logo-tran.png';
import { Register, GetRoles } from '../../service/UserService';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

import Select from 'react-select';

import '../../content/client/css/custom.css'

class AddUserPage extends  Component {
    constructor(props){
        super(props);
        this.state = {
            hideText: true,
            disableButton: true,
            glowPasswordMatch: true,
            loader: false,
            roles: [],
            selectedRole: null,
            value: null,
            show: true
        };
    }

    async componentWillMount(){
        this.BindRoleDropdown();
    }
    
    async BindRoleDropdown(){
        const roleList = [];
        
        this.LoadRoles().then(roles => { 
            for(const role of roles.xReturn.Role){
                var json = {
                    "value": role.RoleId,
                    "label": role.RoleName
                };
                roleList.push(json);
            }
            this.state.roles = roleList;
            
            this.setState({roles: roleList});
        });
    }

    validatePassword = (e) => {
        const password = this.getPassword.value;
        const cPassword =  this.getCPassword.value;

        if(password == cPassword && (password != "")){
            this.setState({ hideText: true, disableButton: false, glowPasswordMatch:true });
        }else{
            this.setState({ hideText: false, disableButton: true, glowPasswordMatch:false });
        }
    }

    requiredField = (e) => {
        const username = this.getUsername.value;
        const firstName = this.getFN.value;
        const middleName = this.getMN.value;
        const lastName = this.getLN.value;
        const selectedRole = this.state.selectedRole;


    }

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.getUsername.value;
        const password =  this.getPassword.value;
        const cPassword =  this.getCPassword.value;
        const firstName = this.getFN.value;
        const middleName = this.getMN.value;
        const lastName = this.getLN.value;
        
        const selectedRole = this.state.selectedRole;
        if(this.state.selectedRole == null){
            // Validation for role selection
        }
        
        if(password == cPassword)
        {
            const data = {
            id: new Date(),
            username,
            password,
            firstName,
            middleName,
            lastName,
            selectedRole,
            ipAddress: "127.0.0.1"
            }

            this.setState({ loader: true, disableButton: true});

            this.Register(data).then(x => { 
                Swal.fire(
                    'Success!',
                    'User Successfully Registered!',
                    'success');
                this.getUsername.value = '';
                this.getPassword.value = '';
                this.getCPassword.value = '';
                this.getFN.value = '';
                this.getMN.value = '';
                this.getLN.value = '';

                this.setState({ loader: false, disableButton: true, value: []});
            });
        }
    }

    async Register(userDetails){

        const stateRegister = await Register(userDetails);
        console.log(stateRegister);
        return stateRegister.data;
    }

    async LoadRoles(){
        const stateRoles = await GetRoles();
        return stateRoles.data;
    }

    ToggleLoad = (e) => {
        var loaderToggle = this.state.loader ? false : true;
        this.setState({ loader: loaderToggle})
    }

    handleChange = selectedOption => {
        this.setState({ selectedRole: selectedOption.value, value: selectedOption });
        console.log(this.state.selectedRole);
    };


    render() {

        const options = this.state.roles;

        var value = this.state.value;

        const hideValidation = this.state.hideText ? {display: 'none'} : {display: 'block' , color: 'red'};
        const glowPasswordMatch =
            this.state.glowPasswordMatch ? {} :
            {
                borderColor: "rgba(253, 0, 0, 0.2)",
                boxShadow: "0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(255, 0, 0, 0.4)"
            }
        const loaderClass = this.state.loader ? { marginRight: "5px" } : { display: 'none' };
        
        return (
            <div className="container">
                <div className="row justify-content-center pt-6">
                    <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="text-center mb-4">
                        <a href="index.html">
                            <img src={Logo} alt="Restaurant Admin Logo" height="150"></img>
                        </a>
                        <h1 className="mb-1">Add a User</h1>
                        <span>Enter user details below</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <Select
                                    placeholder = "Select a Role"
                                    options={options}
                                    value = {value}
                                    onChange={this.handleChange}
                                    noOptionsMessage={() => "Loading Data..."}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" id="username" name="username" placeholder="Username"  
                                ref={(input)=>this.getUsername = input}
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <small id="pValidation" style={hideValidation} > Passwords does not match </small>
                                <input type="password" onKeyUp={this.validatePassword} name="password" placeholder="Password" style={glowPasswordMatch} className="form-control" 
                                ref={(input)=>this.getPassword = input}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password" name="cpassword" onKeyUp={this.validatePassword} placeholder="Confirm Password" style={glowPasswordMatch} className="form-control" 
                                ref={(input)=>this.getCPassword = input}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" id="firstName" name="firstName" placeholder="First Name"  
                                ref={(input)=>this.getFN = input}
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" id="middleName" name="middleName" placeholder="Middle Name"  
                                ref={(input)=>this.getMN = input}
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name"  
                                ref={(input)=>this.getLN = input}
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <button className="btn-block btn btn-primary" disabled={this.state.disableButton} type="submit"> 
                                    <i className="fas fa-sync fa-spin" style={loaderClass}></i>
                                    Register
                                </button>
                            </div>
                            <div className="form-group">
                                <button className="btn-block btn btn-primary" onClick={this.ToggleLoad}> 
                                    Toggle
                                </button>
                            </div>
                        </form>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

  }

  export default connect()(AddUserPage);