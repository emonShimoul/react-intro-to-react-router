import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!!!</h2>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>Page Not Found</h3>
          <p>Go back to Home</p>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
