import React, { Component } from 'react';

import { connect } from 'react-redux';

// If looping data to another page. Use this.
//import Data from './data';

class SampleRedux extends Component {
  render() {
    return (
    <div>
      <h1>Redux Sample</h1>
      {/* Looping data to another page */}
      {/* {this.props.posts.map((post) => <Data key={post.id} post={post} />)} */}

      {/* Looping data in same page */}
      {/* {this.props.posts.map((post) => alert(post.username))} */}
    
    </div>
    );
   }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(SampleRedux);