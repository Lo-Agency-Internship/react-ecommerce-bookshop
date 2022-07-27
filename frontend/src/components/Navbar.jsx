import React from "react";
import Images from "../assets/images/bookshop.png"
import Dropdown from "./DropDown";
const Navbar = ({ShowSignUp}) => {
    return ( 
        <div className="relative bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-20" src={Images} alt="Img"/>
              </div>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Dropdown ShowSignUp={ShowSignUp}/>
              {console.log(ShowSignUp)}

              </div>
            </div>
          </div>
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                  <nav className="grid gap-y-8">
                  </nav>
                </div>
              </div>
                <div>
                  <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a href="#" className="text-indigo-600 hover:text-indigo-500"> Sign in </a>
                  </p>
                </div>
            </div>
        </div>
         );
}
 
export default Navbar;