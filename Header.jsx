import { Link } from "react-router-dom";
import App from "./App";
import logo from "./assets/logo.png";

const Header = () => {
  const navigationLinks = [
    { title: "Home", slug: "/" },
    { title: "Top 10 Chart", slug: "/topchart" },
  ];

  return (
    <div>
      <header>
        <nav className="navigation">
          <div className="header-logo">
            <img className="logo" src={logo} />
            <p className="header-name">Listen Up</p>
          </div>
          <ul>
            {navigationLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.slug}
                onClick={() => console.log(link.slug)}
              >
                <li className="header-links">{link.title}</li>
              </Link>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
