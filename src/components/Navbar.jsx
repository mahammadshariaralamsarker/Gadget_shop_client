import { NavLink } from "react-router-dom";


export const Navbar = () => {
  const navLinks = (
    <ul className=" flex justify-between">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </ul>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
            {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Shop</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex items-center gap-2">
          <NavLink to="/Login" className="bg-green-500 text-white px-4 py-2 rounded-md">Login</NavLink>
          <NavLink to="/Register" className="bg-red-500 rounded-md text-white px-4 py-2">Register</NavLink>
        </div>
        </div>
      </div>
    </div>
  );
};
