function Header() {
  return (
    <header className='header-nav-container'>
      <nav id='header-nav'>
        <ul>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#writer'>Writings</a>
          </li>
          {/* <li>
            <a href='#ux'>UX</a>
          </li> */}
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
