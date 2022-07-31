import React from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";
import Modal from "../components/modalSignup";
import Footer from "../components/footer";
import { useState } from "react"; 
import SignUpModal from "../components/modalSignup";
import SignInModal from "../components/modalsignin";
import ProductsContext from "../context/products";
import image1 from "./../assets/images/main/1.jpg" 


function MainPage() {
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
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  return (
    <>
      <ProductsContext.Provider
        value={{
          BookInfos:Books,
          IsAdmin:isAdmin}
          }>

        <Navbar setShowSignUp= {setShowSignUpModal} setShowSignIn= {setShowSignInModal} />

        <Main/> 

        {showSignUpModal && <SignUpModal/> }
        {showSignInModal && <SignInModal/> }

        <Footer/>

      </ProductsContext.Provider>
    </>
  )
}

export default MainPage;
