import React  from "react";
import { useState , useEffect } from "react"
import Card from "./card";

const Products = ({BookInfos,IsAdmin})=> 
{
    return(
        <>
         
            <div className="flex bg-gray-400 justify-evenly p-5 w-full flex-wrap  ">
               <div className="bg-white my-10 rounded-lg">
                <div className="max-w-2xl py-5  sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8 flex justify-around  flex-wrap">
                    <h2 className="sr-only">Products</h2>
    
                    {BookInfos.map((element,index) => (
                            
                    
                        <Card BookInfo={element} key={index} IsAdmin={IsAdmin}/>
                    ))}
              
              </div>
        </div>
              
              
            </div>
           
        </>
    )
}
export default Products