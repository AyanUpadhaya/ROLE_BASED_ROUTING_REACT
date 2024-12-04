import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import useAuth from "../../../../hooks/useAuth";

export default function Sidebar() {
  const location = useLocation();
  const {user} = useAuth();

  function isActive(path, location) {
    return path == location.pathname ? "active" : "text-white";
  }
  // /dashboard/admin
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark h-full"
      style={{ width: "280px" }}
    >
      <Link
        to={"/"}
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Product Mart</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to={`/dashboard/${user?.role}`}
            className={`nav-link ${isActive("/dashboard/admin", location)}`}
            aria-current="page"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to={`/dashboard/${user?.role}/profile`}
            className={`nav-link ${isActive(
              "/dashboard/admin/profile",
              location
            )}`}
            aria-current="page"
          >
            Profile
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
