import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
          <div className="container">
            <Link className="navbar-brand" to="/welcome">
              WoodCraft Haven
            </Link>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inventory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavbarComponent;
