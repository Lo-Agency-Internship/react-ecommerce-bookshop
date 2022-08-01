import React  from "react";

export default function Card({book}) {
    return (
            <div className="lg:w-1/4 sm:w-4/6 md:w-4/6 m-2 flex flex-wrap my-5">
              <a href={book.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={book.imageSrc}
                    alt={book.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{book.title}</h3>
                <div className="flex">
                  <p className="mt-1 text-lg font-medium text-gray-900 mr-24">{book.price.toLocaleString("fa-IR")}</p>
                </div>

              </a>
           </div>
       
    )
  }