import { Link } from 'react-router-dom';

export default function Nav({ logo, links }) {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            {logo && (
              <Link to="/" className="navbar-brand d-flex align-items-center" aria-label="Home">
                {logo}
              </Link>
            )}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => link)}
            </ul>
        </div>
      </nav>
    );
  }
  