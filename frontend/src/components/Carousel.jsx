import React  from "react";
import { useState , useEffect } from "react"
import Card from "./Card";

const Carousel = ({BookInfos})=> 
{
    return(
        <>
         
            <div className="flex bg-gray-400 justify-evenly p-5 w-full flex-wrap  rounded-lg">
                {BookInfos.map((element,index) => (

                    //   {console.log(`BookInfos `,element)} 
                    <Card BookInfo={element} key={index}/>
                ))}
              
              
            </div>
           
        </>
    )
}
export default Carousel