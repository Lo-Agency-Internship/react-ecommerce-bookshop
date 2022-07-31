import React  from "react";
import Products from "./products";
import SearchBar from "./searchBar";

const Main = (props)=> 
{
        
    return(
        <>
            <div className="">
            <SearchBar />
            </div>

            <div  className="mt-12 flex justify-center ">
            <Products ></Products>
            </div>
        </>
    )
}

export default Main