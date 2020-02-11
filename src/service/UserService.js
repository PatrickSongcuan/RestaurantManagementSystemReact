import React, { Component } from 'react';
import axios from 'axios';

export async function Login(LoginModel){
    return axios.post(`http://localhost:57785/api/restoadmin/login`, { Username: LoginModel.Username, Password: LoginModel.Password, IpAddress: LoginModel.ipAddress });
}

export async function Register(RegisterModel){
    return axios.post(`http://localhost:57785/api/restoadmin/register`, { 
        Username: RegisterModel.username,
        Password: RegisterModel.password,
        FirstName: RegisterModel.firstName,
        MiddleName: RegisterModel.middleName,
        LastName: RegisterModel.lastName,
        RoleId: RegisterModel.selectedRole,
        IpAddress: RegisterModel.ipAddress
    });
}

export async function GetRoles(){
    return axios.get('http://localhost:57785/api/restoadmin/getroles');
}

export default {Login, Register, GetRoles}