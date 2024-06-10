import React from "react";
import { Link } from "react-scroll";

const NavBarItem = ({ name, to, current }) => {
  return (
    <li>
      <Link
        to={to}
        smooth={true}
        duration={700}
        spy={true}
        activeClass="active"
        className={`block py-2 px-3 rounded md:p-0 cursor-pointer relative ${
          current
            ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
            : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        }`}
        aria-current={current ? "page" : undefined}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavBarItem;
