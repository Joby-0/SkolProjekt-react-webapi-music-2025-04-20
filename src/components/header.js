import React from 'react'
import { Link } from 'react-router'

export function Header() {
  return (
    <div className="container mt-5">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to={'../'} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">List groups - MusicApp.com</span>
      </Link>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to={'../'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'../list'}>Famous groups</Link>
        </li>
      </ul>
    </header>
  </div>
  )
}
