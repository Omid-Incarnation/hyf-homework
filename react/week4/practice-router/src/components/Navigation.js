import React from 'react'
import {Link} from "react-router-dom"

export default function Navigation() {
  return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
    </ul>
  )
}
