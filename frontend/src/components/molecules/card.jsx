import React  from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/main/1.jpg"
import { useApiContext } from "../../context/api";

export default function Card({book}) {
  const {user,setUser} = useApiContext();

    return (
            <div className="lg:w-1/4 sm:w-4/6 md:w-4/6 m-2 flex flex-wrap my-5">
              <Link to={`${book.id}`} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={image}
                    alt="book"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{book.title}</h3>
                <div className="flex justify-between">
                  <p className="mt-1 text-lg font-medium text-gray-900 mr-24">{book.price.toLocaleString("fa-IR")}</p>
                  {user.role ==="user" ?  
                  (<button type="button" class="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                    Add
                  </button>)
                  :
                      (<>
                      <button type="button" class="bg-yellow-500 mx-auto mr-2 py-2 px-3 text-xs font-medium text-center text-white  rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-800">Edit</button>
                      <button type="button" class="py-2 px-3 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>
                        </>
                      )

                  }
                 
                </div>

              </Link>
           </div>
       
    )
  }