import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import "./index.css";

function App() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <Header />
      <div className="mt-2">
        <main className="rounded-lg bg-white p-2 shadow">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
