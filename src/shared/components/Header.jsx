import React from 'react';

export const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 relative">
          <div className="flex justify-between items-center mx-auto max-w-screen-xl relative">
            
            {/* CENTERED MENU */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2" id="centered-menu">
              <ul className="flex space-x-8 font-medium">
                <li>
                  <a href="#" className="text-primary-700 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Company</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Marketplace</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Features</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Team</a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Contact</a>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center lg:order-2 ml-auto">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
