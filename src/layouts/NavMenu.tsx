import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";

function NavMenu() {
  const links = [
    { to: "/", label: "root" },
    { to: "/sample", label: "sample" },
  ];

  return (
    <Menu>
      <MenuButton className="flex h-11 w-11 rounded-lg border-2 border-slate-300 bg-white p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-6 w-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <title>Menu</title>
        </svg>
      </MenuButton>
      <MenuItems anchor="bottom end" className="rounded-lg border-2 border-slate-300 shadow-md">
        {links.map((link) => {
          return (
            <MenuItem key={link.to}>
              {({ close }) => (
                <div className="bg-white p-2">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `${isActive ? "font-semibold text-orange-500" : ""} block`
                    }
                    onClick={close}
                  >
                    {link.label}
                  </NavLink>
                </div>
              )}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
}

export default NavMenu;
