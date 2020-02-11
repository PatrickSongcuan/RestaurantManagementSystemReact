import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoginLayoutRoute from "./layout/client/LoginLayout";  
import DashboardLayoutRoute from "./layout/client/DashboardLayout";  

import UserPage from './pages/UserPage';  
import LoginPage from './pages/client/Login';
import AboutPage from './pages/client/About';
import PricingPage from './pages/client/Pricing';
import DocsPage from './pages/client/Docs';
import DemosPage from './pages/client/Demos';
import ContactPage from './pages/client/Contact';

import AddUser from './pages/admin/AddUser';

// For demo purposes
import SampleRedux from './pages/client/SampleRedux';

class App extends Component {
  constructor(props){
      super(props);

      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
  }  
  
  handleChange = event => {
    this.setState({value: event.target.value});
  }

  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/Home" />  
          </Route> 
          <DashboardLayoutRoute path="/Home" component={UserPage} /> 
          <DashboardLayoutRoute path="/About" component={AboutPage} />   
          <DashboardLayoutRoute path="/Pricing" component={PricingPage} />   
          <DashboardLayoutRoute path="/Docs" component={DocsPage} />   
          <DashboardLayoutRoute path="/Demos" component={DemosPage} />   
          <DashboardLayoutRoute path="/Contact" component={ContactPage} />  
          <DashboardLayoutRoute path="/SampleRedux" component={SampleRedux} />    
          <LoginLayoutRoute path="/Login" component={LoginPage} />    
          <LoginLayoutRoute path="/AddUser" component={AddUser} /> 
        </Switch>  
      </Router>  
    );  
  }  
}

export default App;
