import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid dark">
    News Man
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link "  to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/business">Business</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to="/technology">Technology</Link>
        </li>

      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
// businessentertainmentgeneralhealthsciencesportstechnology