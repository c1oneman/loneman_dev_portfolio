import { Link } from "react-router-dom";

import MenuHamburger from "../svg/MenuHamburger.js";
import { useState } from "react";

const Nav = () => {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  return (
    <div className="w-full border-b py-2 fixed z-10 top-0 bg-white dark:bg-gray-800">
      <nav className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center mx-2 sm:items-stretch justify-start">
            <Link to="/">
              <div className="hidden items-center justify-between md:flex">
                <img
                  className="rounded-full h-12 m-3"
                  src="/images/profile.png"
                  alt="Clayton Loneman"
                />
                <h1 className="font-bold text-lg dark:text-white">
                  Clayton Loneman
                  <span className="text-gray-500 font-medium">.dev</span>
                </h1>
              </div>
              <div className="flex items-center justify-between md:hidden">
                <img
                  className="rounded-full h-12 m-3"
                  src="/images/profile.png"
                  alt="Clayton Loneman"
                />
                <h1 className="font-bold text-xl dark:text-white">
                  loneman
                  <span className="text-gray-500 font-medium">.dev</span>
                </h1>
              </div>
            </Link>
          </div>
          <div className="flex-1 flex items-center mx-2 sm:items-stretch justify-end">
            <div
              className="block sm:hidden"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <MenuHamburger />
            </div>
          </div>
          <div className="pr-2 sm:static sm:inset-auto sm:pr-0 hidden sm:block">
            <div className="mx-5 ">
              <button
                onMouseEnter={(e) => setAboutDropdownOpen(true)}
                className="text-gray-700 dark:text-gray-200 px-3 py-2 font-bold hover:text-gray-400"
              >
                Projects ▾
              </button>
              {aboutDropdownOpen && (
                <div
                  class="origin-top-right absolute top-50 mt-2 shadow-lg py-1 bg-white dark:bg-gray-800 ring-black ring-opacity-5 focus:outline-none font-bold"
                  tabindex="-1"
                  onMouseLeave={(e) => setAboutDropdownOpen(false)}
                >
                  <Link
                    class="block px-4 py-2 text-md text-gray-700 dark:text-gray-200 hover:text-gray-500"
                    to="/weather-against-humans"
                  >
                    Weather Against Humans
                  </Link>
                  <Link
                    class="block px-4 py-2 text-md text-gray-700 dark:text-gray-200 hover:text-gray-500"
                    to="/almost-clone"
                  >
                    Almo.st clone
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Link
            to="/resume"
            className="text-gray-700 dark:text-gray-200 px-3 py-2 font-bold mx-2 hover:text-gray-400 hidden sm:block"
            aria-current="page"
            onMouseEnter={(e) => setAboutDropdownOpen(false)}
          >
            Resume
          </Link>
          <Link
            to="/history"
            className=" text-gray-700 dark:text-gray-200 px-3 py-2 font-bold mx-2 hover:text-gray-400 hidden sm:block"
            aria-current="page"
            onMouseEnter={(e) => setAboutDropdownOpen(false)}
          >
            History
          </Link>
          <Link
            to="/contact"
            rel="noopener noreferrer"
            className="text-white px-4 py-2 rounded-full font-bold bg-yellow-500 hover:bg-yellow-400 ml-2 hidden sm:block"
            onMouseEnter={(e) => setAboutDropdownOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </nav>
      <div
        className={`z-50 m-0 h-screen w-full absolute right-0 bg-gray-50 dark:bg-gray-900  ${
          mobileDropdownOpen ? "flex" : "hidden"
        }`}
      >
        <div
          className={`h-auto min-h-screen border-r-0 border-none p-8 
             flex-col max-h-full text-2xl font-bold`}
        >
          <div className="flex flex-col flex-grow overflow-y-auto items-start dark:text-gray-50">
            <button onClick={(e) => setAboutDropdownOpen(!aboutDropdownOpen)}>
              Projects
            </button>
            <div
              className={`border-l-4 flex flex-col pl-2 text-xl font-normal text-gray-500 dark:text-gray-50 ${
                !aboutDropdownOpen ? "hidden" : "block"
              }`}
            >
              <Link
                to="/weather-against-humans"
                className="py-1 "
                onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Weather Against Humans
              </Link>
              <Link
                to="/almost-clone"
                className="py-1"
                onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Almo.st clone
              </Link>
            </div>
            <Link
              to="/resume"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Resume
            </Link>
            <Link
              to="/history"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              History
            </Link>
            <Link
              to="/contact"
              onClick={(e) => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
