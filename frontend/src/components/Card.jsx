import React  from "react";
import { useState , useEffect } from "react"
import Button from './button'

// const Card = ({BookInfo})=> 
// {
//     return(
//         <>
         
//          <div class="flex justify-evenly max-w-fit  my-5">
//                     <div class="block p-6 rounded-lg shadow-lg bg-white ">
//                         <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2  ">{BookInfo.BookName}</h5>
//                         <p class="text-gray-700 text-base mb-4">
//                         {BookInfo.BookDescription}
//                         </p>
//                         <Button buttonName="Success"/>
//                     </div>
//                 </div>
//         </>
//     )
// }
// export default Card


export default function Card({BookInfo , IsAdmin}) {
    return (
   
        
            <div className="lg:w-1/4 sm:w-4/6 md:w-4/6 m-2 flex flex-wrap my-5">
              <a key={BookInfo.id} href={BookInfo.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={BookInfo.imageSrc}
                    alt={BookInfo.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{BookInfo.name}</h3>
                <div className="flex">
                  <p className="mt-1 text-lg font-medium text-gray-900 mr-24">{BookInfo.price}</p>
                 {IsAdmin && <button type="button" class="bg-yellow-500 mx-auto mr-2 py-2 px-3 text-xs font-medium text-center text-white  rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-500 dark:focus:ring-yellow-800">Edit</button>} 
                 {IsAdmin &&  <button type="button" class="py-2 px-3 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button>}
                </div>

              </a>
           </div>
       
    )
  }