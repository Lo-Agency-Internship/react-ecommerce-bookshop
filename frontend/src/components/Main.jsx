import React  from "react";
import { useState , useEffect } from "react"
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";


import image1 from "./../assets/images/main/1.jpg" 
import image2 from "./../assets/images/main/2.jpg" 
import image3 from "./../assets/images/main/3.jpg" 
import image4 from "./../assets/images/main/4.jpg" 
import image5 from "./../assets/images/main/5.jpg" 
import image6 from "./../assets/images/main/6.jpg" 
const Main = ()=> 
{
    const [Books, setAllBooks]= useState([
       
            {
              id: 1,
              name: 'Nomad Tumbler',
              href: '#',
              price: '$35',
              imageSrc:image6,
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
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
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image4,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
            id: 3,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image6,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
            id: 1,
            name: 'Nomad Tumbler',
            href: '#',
            price: '$35',
            imageSrc:image5,
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
            },
            {
                id: 1,
                name: 'Nomad Tumbler',
                href: '#',
                price: '$35',
                imageSrc:image4,
                imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
              },
              {
              id: 2,
              name: 'Nomad Tumbler',
              href: '#',
              price: '$35',
              imageSrc:image6,
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
              },
              {
              id: 3,
              name: 'Nomad Tumbler',
              href: '#',
              price: '$35',
              imageSrc:image4,
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
              },
              {
              id: 3,
              name: 'Nomad Tumbler',
              href: '#',
              price: '$35',
              imageSrc:image3,
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
              },
              {
              id: 1,
              name: 'Nomad Tumbler',
              href: '#',
              price: '$35',
              imageSrc:image2,
              imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
              },
                    
                  
           
       
     
    ])
        
    return(
        <>
            <div className="">
            <SearchBar />
            </div>
               {/* {console.log("Books ",Books)} */}
            <div  className="mt-12 flex justify-center ">
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