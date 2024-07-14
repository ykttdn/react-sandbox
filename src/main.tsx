import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Root from "./routes/Root.tsx";
import Sample from "./routes/Sample.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Root /> },
      { path: "/sample", element: <Sample /> },
    ],
  },
]);

// biome-ignore lint/style/noNonNullAssertion:
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
