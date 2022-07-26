import React from "react";
import Images from "../../assets/images/bookshop.png"
import Dropdown from "../molecules/dropDown";
import { useLocation, useNavigate } from "react-router-dom";
import { useApiContext } from "../../context/api";

const Navbar = ({ setShowSignUp, setShowSignIn, setCreateModalIsOpen }) => {
  
  const { pathname } = useLocation()
  const navigate = useNavigate();
  const {user,setUser} = useApiContext();
  function  handleSignOut() {
    localStorage.removeItem('token')
    setUser(null)
    navigate("/")
  }
  return (
    <div className="fixed top-0 left-0 right-0 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Workflow</span>
            <img className="h-8 w-auto sm:h-20" src={Images} alt="Img" />
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {pathname === "/products" &&
              user.role === "admin" &&
              <button
                onClick={() => setCreateModalIsOpen(true)}
                className="mr-2 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ">
                Add New
              </button>
            }

            <Dropdown setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} handleSignOut={handleSignOut}/>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">

        </div>
     

        <div className="pt-6 pb-6 px-5">
          <nav className="grid gap-y-8">
          </nav>
        </div>
        {user ? (
          <>
            <button
              className="mt-10 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700">
              Order List </button>
            <p className="mt-3 text-center text-base font-medium text-gray-500">
              Do you want to leave?
              <button
                className="text-gray-600 hover:text-gray-500" onClick={()=>handleSignOut()}>
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
