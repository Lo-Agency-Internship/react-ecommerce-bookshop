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


export default function Card({BookInfo}) {
    return (
   
        
            <div className="w-1/4 m-5 flex flex-wrap">
              <a key={BookInfo.id} href={BookInfo.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={BookInfo.imageSrc}
                    alt={BookInfo.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{BookInfo.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{BookInfo.price}</p>
              </a>
           </div>
       
    )
  }