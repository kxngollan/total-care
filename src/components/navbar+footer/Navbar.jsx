import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TiThMenu, TiTimes } from "react-icons/ti";
import { MdFindInPage } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [sideCart, setSideCart] = useState(false);
  const [sidenav, setSidenav] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      icon: <MdFindInPage className="sidenav-icon" />,
      href: "https://fakestoreapi.com/",
    },
    {
      icon: <FaGithub className="sidenav-icon" />,
      href: "https://github.com/keikaavousi/fake-store-api",
    },
  ];

  const location = useLocation();

  const toggle = (section) => {
    if (section === "sidenav") {
      setSidenav(!sidenav);
    } else {
      setSideCart(!sideCart);
    }
  };

  return (
    <nav>
      <div className="mobile-nav">
        <TiThMenu className="nav-icon" onClick={() => toggle("sidenav")} />
        {sidenav ? (
          <div className="mobile">
            <div className="overflow" onClick={() => toggle("sidenav")}></div>
            <div className="mobile-sidenav">
              <TiTimes className="nav-icon" onClick={() => toggle("sidenav")} />
              <ul className="sidenav-links">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className={
                      link.path === location.pathname ? "active-link" : ""
                    }
                  >
                    <Link to={link.path} onClick={() => setSidenav(false)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="socials">
                {socials.map((social, index) => (
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social"
                    key={index}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <a
                href="https://github.com/kxngollan"
                target="_blank"
                rel="noreferrer"
              >
                Coded by Ollan Muza
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <Link to={"/"} className="nav-home">
        <div className="nav-title">
          <h1>TCR</h1>
        </div>
      </Link>
      <ul className="nav-links">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={link.path === location.pathname ? "active-link" : ""}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;