import { useState, useEffect } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaAnglesDown } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const navLinks = [
  { id: "home", title: "Home", path: "/" },
  { id: "committee", title: "Committee", path: "/committee" },
  { id: "events", title: "Events", path: "/events" },
  { id: "about", title: "About", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="w-full flex py-2 lg:py-3 justify-between items-center bg-neutral-900 px-2 sticky top-0 z-10">
      <ul className="list-none sm:flex hidden items-center flex-1 justify-start">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins hover:text-gray-100 font-normal cursor-pointer text-lg mx-3 ${
              active === nav.path ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActive(nav.path)}
          >
            <a href={nav.path}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex items-center justify-end flex-1">
        {toggle ? (
          <FaAnglesDown
            className="text-white cursor-pointer hover:bg-slate-800 p-1 rounded transition duration-300 ease-in-out"
            size={32}
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <TfiMenuAlt
            className="text-white cursor-pointer hover:bg-slate-800 p-1 rounded transition duration-300 ease-in-out"
            size={32}
            onClick={() => setToggle(!toggle)}
          />
        )}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-neutral-900 bg-opacity-70 absolute top-16 right-0 mx-4 my-2 min-w-[160px] rounded-lg shadow-lg`}
        >
          <ul className="list-none flex flex-col justify-start items-start w-full">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins hover:text-gray-200 font-medium cursor-pointer text-lg mb-4 ${
                  active === nav.path ? "text-white" : "text-gray-400"
                }`}
                onClick={() => {
                  setActive(nav.path);
                  setToggle(false);
                }}
              >
                <a href={nav.path}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
