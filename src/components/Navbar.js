import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-uppercase" to="/">
            Inventory
          </Link>
          <div className="d-flex" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/add-inventory">
                  Add Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/manage-inventory">
                  Manage Inventory
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
