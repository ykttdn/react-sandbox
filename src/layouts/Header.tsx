import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header className="flex items-center justify-between rounded-lg bg-white p-2 shadow">
      <h1 className="flex items-center">
        <Link to="/">React Sandbox</Link>
      </h1>
      <NavMenu />
    </header>
  );
}

export default Header;
