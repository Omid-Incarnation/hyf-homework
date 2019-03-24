import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class about extends Component {
  render() {
    return (
      <div>
        <h1>This is About Page!</h1>
        <Link to="/">goto Home</Link>
      </div>
    )
  }
}
