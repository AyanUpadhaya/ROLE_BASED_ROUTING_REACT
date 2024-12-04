import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link
                  to={"login"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"register"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
