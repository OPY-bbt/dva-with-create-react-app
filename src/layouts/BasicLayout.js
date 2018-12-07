import React, { Component } from 'react';

console.log(process.env.NODE_PATH);
export default class BasicLayout extends Component {
  render() {
    console.log(process.env.NODE_ENV);
    return (
      <div>BasicLayout</div>
    );
  }
}
