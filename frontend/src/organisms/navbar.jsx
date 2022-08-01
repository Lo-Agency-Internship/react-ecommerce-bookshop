import React from "react";
import Images from "../assets/images/bookshop.png"
import Dropdown from "../dropDown";

const Navbar = ({ setShowSignUp, setShowSignIn }) => {
  const User = null;
  return (
    <div className="relative bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Workflow</span>
            <img className="h-8 w-auto sm:h-20" src={Images} alt="Img" />
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Dropdown setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">

        </div>
        {/* <button id="dropdownMenuIconButton"
          data-dropdown-toggle="dropdownDots"
          class="absolute py-7 right-0 inline-flex items-right p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </button> */}

        <div className="pt-6 pb-6 px-5">
          <nav className="grid gap-y-8">
          </nav>
        </div>
        {User ? (
          <>
            <button
              className="mt-10 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700">
              Order List </button>
            <p className="mt-3 text-center text-base font-medium text-gray-500">
              Do you want to leave?
              <button
                className="text-gray-600 hover:text-gray-500">
                Sign Out
              </button>
            </p>
          </>
        ) : (
          <>

            <button onClick={() => {
              setShowSignUp(true);
              setShowSignIn(false);
            }} className="mt-10 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700"> Sign up </button>
            <p className="mt-3 text-center text-base font-medium text-gray-500">
              Existing customer?
              <button onClick={() => {
                setShowSignIn(true);
                setShowSignUp(false);
              }}
                className="text-gray-600 hover:text-gray-500">
                Sign in
              </button>
            </p>
          </>
        )}

        <div>
        </div>

      </div>
    </div >
  );
}

export default Navbar;
