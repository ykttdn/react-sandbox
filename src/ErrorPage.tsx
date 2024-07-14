import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="max-w-screen-lg mx-auto">
      {isRouteErrorResponse(error) && <p>{error.statusText || error.data}</p>}
    </div>
  );
}
