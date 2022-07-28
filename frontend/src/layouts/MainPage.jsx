import React from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";
import Modal from "../components/modalSignup";
import Footer from "../components/footer";
import { useState } from "react";

function MainPage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  return (
    <>
      <Navbar ShowSignUp={setShowSignUpModal} />
      
    
      {showSignUpModal ? <Modal /> : <Main/>}


      <Footer />
    </>
  )
}

export default MainPage;
