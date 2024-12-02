import { Link } from "react-router-dom";

const NavbarComponent = ({ pathname }) => {
  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Furni<span>.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${pathname == undefined && "active"}`}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className={`${pathname === "shop" && "active"}`}>
              <a className="nav-link" href="shop">
                Shop
              </a>
            </li>
            <li className={`${pathname === "about" && "active"}`}>
              <a className="nav-link" href="about">
                About us
              </a>
            </li>
            <li className={`${pathname === "services" && "active"}`}>
              <a className="nav-link" href="services">
                Services
              </a>
            </li>
            <li className={`${pathname === "blog" && "active"}`}>
              <a className="nav-link" href="blog">
                Blog
              </a>
            </li>
            <li className={`${pathname === "contact" && "active"}`}>
              <a className="nav-link" href="contact">
                Contact us
              </a>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a className="nav-link" href="/">
                <img src="images/user.svg" alt="user icon" />
              </a>
            </li>
            <li>
              <Link className="nav-link" to="/CartPage">
                <img src="images/cart.svg" alt="cart icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarComponent;
