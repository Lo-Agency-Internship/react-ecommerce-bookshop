import React from "react";
import Navbar from "../components/navbar";
import Modal from "../components/modalSignup";
import Footer from "../components/footer";
import { useState } from "react"; 

function MainPage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      
      
      <Navbar ShowSignUp= {setShowSignUpModal}/>

      {showSignUpModal && <Modal/>}
      <Footer/>
    </>
  )
}

export default MainPage;
