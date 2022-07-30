import React  from "react";
import { useState , useEffect } from "react"
import Products from "./products";
import SearchBar from "./searchBar";


import image1 from "./../assets/images/main/1.jpg" 
import image2 from "./../assets/images/main/2.jpg" 
import image3 from "./../assets/images/main/3.jpg" 
import image4 from "./../assets/images/main/4.jpg" 
import image5 from "./../assets/images/main/5.jpg" 
import image6 from "./../assets/images/main/6.jpg" 
import  Carousel from "./carousel";
const Main = ()=> 
{
    const [Books, setAllBooks]= useState([
       
            {
              id: 1,
              name: 'Nomad Tumbler',
              href: '#',
              price: '$35',
              imageSrc:image1,
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
            id: 2,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image1,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
            id: 3,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image1,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
            id: 3,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image1,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
            id: 1,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image1,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
        
    ])

    const [IsAdmin, setIsAdmin]= useState(true)
        
    return(
        <>
            <div className="">
            <SearchBar />
            </div>

            {/* <div className="App">
              <Carousel>
                  
              </Carousel>
            </div> */}

               {/* {console.log("Books ",Books)} */}
            <div  className="mt-12 flex justify-center ">
            <Products BookInfos={Books} IsAdmin={IsAdmin}></Products>
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