import React  from "react";
import { useState , useEffect } from "react"
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
const Main = ()=> 
{
    const [Books, setAllBooks]= useState([
        {
            BookName : "123",
            BookDescription: "123 ra bekharid"
        },
   
     
    ])
        
    return(
        <>
            <div className="">
            <SearchBar />
            </div>
               {console.log("Books ",Books)}
            <div  className="my-12 flex justify-center ">
            <Carousel BookInfos={Books}></Carousel>
            </div>

            {/* <div className="my-12">
            <Carousel></Carousel>
            </div>

            <div className="my-12">
            <Carousel></Carousel>
            </div>
             */}
        
        </>
    )



}

export default Main