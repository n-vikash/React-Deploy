import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="not-found-content">
        <p className="not-found-code">404</p>

        <h1>Page Not Found</h1>

        <p className="not-found-message">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>

        <Link to="/" className="home-link">
          Go to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
