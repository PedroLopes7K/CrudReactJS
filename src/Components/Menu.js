import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu(props) {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/cadastrar'}>Cadastrar</Link>
        </li>
      </ul>
    </nav>
  )
}
