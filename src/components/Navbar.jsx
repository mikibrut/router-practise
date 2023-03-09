import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <header>
        <h1>REACT PRACTISE</h1>
      </header>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
      </ul>
    </div>
  )
}
