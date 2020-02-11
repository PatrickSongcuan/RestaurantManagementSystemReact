import React, { Component } from 'react';

class Data extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.username}</h2>
      <p>{this.props.post.password}</p>
    </div>
  );
 }
}
export default Data;