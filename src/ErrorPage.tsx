import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "./layouts/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="mx-auto max-w-screen-lg">
      <Header />
      <div className="mt-2">
        <main className="rounded-lg bg-white p-2 shadow">
          <h2>An unexpected error has occurred.</h2>
          {isRouteErrorResponse(error) && <p className="mt-4">{error.statusText || error.data}</p>}
        </main>
      </div>
    </div>
  );
}
