import React from 'react';  
import { Route, NavLink  } from 'react-router-dom';
import '../../content/client/css/style.css'
  
const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div>
      <div className="navbar-container ">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary-3" data-sticky="top">
          <div className="container">
            <a className="navbar-brand fade-page" href="index.html">
               Restaurant Management System {/* <img src="assets/img/logo-white.svg" alt="Leap" /> */}
            </a>
            <div className="collapse navbar-collapse justify-content-end">
              <div className="py-2 py-lg-0">
                <ul className="navbar-nav">
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/Home">
                  Home
                  </NavLink>
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/about">
                  About
                  </NavLink>
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/pricing">
                  Pricing
                  </NavLink>
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/docs">
                  Docs
                  </NavLink>
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/demos">
                  Demos
                  </NavLink>
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/contact">
                  Contact Us
                  </NavLink>
                  <NavLink activeclassname="nav-item active" className="nav-item nav-link" to="/sampleRedux">
                  SampleRedux
                  </NavLink>
                </ul>
              </div>
              <NavLink activeclassname="nav-item active" className="btn btn-primary ml-lg-3" to="/login">
              Login
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      {children} 
    </div>
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute;