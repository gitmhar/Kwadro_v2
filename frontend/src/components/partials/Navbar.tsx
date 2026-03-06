import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logout from "./auth/Logout";

export default function Navbar() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading....</p>;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <ul className="navbar-nav flex-row gap-3">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {user ? (
            <>
              {user.emailVerified ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/book">
                    Book
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <span
                    className="nav-link text-warning"
                    style={{ cursor: "not-allowed" }}
                  >
                    Verify Email to Book 🔒
                  </span>
                </li>
              )}

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <Logout />
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
