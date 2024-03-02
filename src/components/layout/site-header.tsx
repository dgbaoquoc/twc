import LangSwitcher from "@/components/lang-switcher";
import Image from "next/image";
import Link from "next/link";

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
            <Link href="/" prefetch={false}>
              <Image
                src="/assets/images/logo/logo-white.png"
                width={124}
                height={24}
                alt="TWC logo"
                className="light-version-logo"
              />
            </Link>
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
            </nav>
          </div>

          <div className="mx-4">
            <LangSwitcher />
          </div>

          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
            <Link
              prefetch={false}
              className="aximo-default-btn pill aximo-header-btn"
              href={"#contact"}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
