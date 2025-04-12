import React from 'react'

export function Header() {
  return (
    <div className="container mt-5">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">List groups - MusicApp.com</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/musiclist.html">Famous groups</a>
        </li>
      </ul>
    </header>
  </div>
  )
}
