export default function SiteHeader() {
  return (
    <header
      className="site-header aximo-header-section aximo-header1 dark-bg"
      id="sticky-menu"
    >
      <div className="container">
        <nav className="navbar site-navbar">
          {/* Brand Logo */}
          <div className="brand-logo">
            <a href="index.html">
              <img
                src="assets/images/logo/logo-white.svg"
                alt=""
                className="light-version-logo"
              />
            </a>
          </div>
          <div className="menu-block-wrapper">
            <div className="menu-overlay"></div>
            <nav className="menu-block" id="append-menu-header">
              <div className="mobile-menu-head">
                <div className="go-back">
                  <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="site-menu-main">
                <li className="nav-item nav-item-has-children">
                  <a href="#" className="nav-link-item drop-trigger">
                    Demo <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className="sub-menu" id="submenu-1">
                    <li className="sub-menu--item">
                      <a href="index.html">
                        <span className="menu-item-text">Design Agency</span>
                      </a>
                    </li>
                    {/* Other submenu items */}
                  </ul>
                </li>
                {/* Other top-level menu items */}
              </ul>
            </nav>
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <a
              className="aximo-default-btn pill aximo-header-btn"
              href="contact-us.html"
            >
              Contact Us
            </a>
          </div>
          {/* mobile menu trigger */}
          <div className="mobile-menu-trigger light">
            <span></span>
          </div>
          {/*/.Mobile Menu Hamburger Ends*/}
        </nav>
      </div>
    </header>
  );
}
