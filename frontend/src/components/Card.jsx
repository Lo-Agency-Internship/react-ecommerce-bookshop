import React  from "react";
import { useState , useEffect } from "react"
import Button from './Button'
import image1 from "./../assets/images/main/1.jpg" 
import image2 from "./../assets/images/main/2.jpg" 
import image3 from "./../assets/images/main/3.jpg" 
import image4 from "./../assets/images/main/4.jpg" 
import image5 from "./../assets/images/main/5.jpg" 
import image6 from "./../assets/images/main/6.jpg" 
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
const products = [


  
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc:image2,
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: image3,
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: image4,
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

export default function Card({BookInfo}) {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }