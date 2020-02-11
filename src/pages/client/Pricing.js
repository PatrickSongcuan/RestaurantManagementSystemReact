import React from 'react';  

function Pricing() {  
    return (  
      <div>
        <section className="bg-primary-3 has-divider text-light">
          <div className="container pb-6">
            <div className="row justify-content-center text-center">
              <div className="col-xl-8 col-lg-9 col-md-10">
                <h1 className="display-3 mb-5">Pricing</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container">
            <div class="row justify-content-center">
              <h2>Under Development</h2>
            </div>
            <div class="row justify-content-center">
              <p className="lead">The site is currently undergoing development.
                Target release of the update on this page is on <b> January 2020! </b>
              </p>
            </div>
          </div>
        </section>
          <hr/>
        <section>
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-8 col-xl-6">
            <div class="text-center mb-4">
              <h2 class="h2">Subscribe for updates.</h2>
              <p class="lead">
                  Enter your details below and be the first to know about updates on this website!
              </p>
            </div>
            <form action="#">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Your Name *</label>
                    <input name="contact-name" type="text" class="form-control" required/>
                    <div class="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Your Email Address *</label>
                    <input name="contact-name" type="text" class="form-control" required/>
                    <div class="invalid-feedback">
                      Please enter your email address.
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-loading" data-loading-text="Sending">
                  {/* <img class="icon" src="assets/img/icons/theme/code/loading.svg" alt="loading icon" data-inject-svg /> */}
                  <span>Subscribe</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        </section>
      </div>
    );  
  };  
  
  export default Pricing  