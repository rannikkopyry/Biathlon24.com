.menu {
  background-color: grey;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 80px;
  transition: all 1s ease;
  justify-content: center;
  text-align: center;
  align-items: center;
  overflow: hidden;

  ul {
    text-align: center;
    align-items: center;
    white-space: nowrap;
    display: grid;
    position: absolute;
    grid-template-columns: repeat(6, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 100%;
    justify-content: center;
    margin-right: 2rem;
    margin-top: 10px;

    li {
      display: flex;
      align-items: center;
      height: 70px;

      a {
        color: white;
        font-weight: bold;
        text-decoration: none;
        font-size: 1.2rem;
      }
      a:hover {
        text-decoration: none;
        color: $mainColor2;
      }
    }
  }
}

<nav className="topbar2">
  
  <div className="menu" onClick={handleClick}>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li
       className="nav-item"
      ><a href="/">
        <Link className="nav-link" to="/" onClick={closeMobileMenu}>
          Homepage
          <span className="sr-only">(current)</span>
        </Link>
      </a></li>
      <li
       className="nav-item"
      ><a href="/News">
        <Link className="nav-link" to="/News" onClick={closeMobileMenu}>
          News
        </Link>
      </a></li>
      <li
        className="nav-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ><a href="/Competitions">
        <Link className="nav-link" to="/Competitions" onClick={closeMobileMenu}>
          Competitions
        </Link>
        {dropdown && <Dropdown />}
      </a></li>
      <li
      className="nav-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ><a href="/Results">
        <Link className="nav-link" to="/Results" onClick={closeMobileMenu}>
          Results
        </Link>
        {dropdown && <DropdownResults />}
      </a></li>
      <li
      className="nav-item"
      ><a href="/Athletes">
        <Link className="nav-link" to="/Athletes" onClick={closeMobileMenu}>
          Athletes
        </Link>
      </a></li>
      <li
      className="nav-item"
      ><a href="/About">
        <Link className="nav-link" to="/About" onClick={closeMobileMenu}>
          About Biathlon
        </Link>
      </a></li>
    </ul>
    
  </div>
  </nav>