import React from "react";
import Main from "../components/main";
import Navbar from "../components/navbar";
import Modal from "../components/modalSignup";
import Footer from "../components/footer";
import { useState } from "react"; 
import SignUpModal from "../components/modalSignup";
import SignInModal from "../components/modalsignin";

function MainPage() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  return (
    <>
      
      <Navbar setShowSignUp= {setShowSignUpModal}
      setShowSignIn= {setShowSignInModal} />

      {showSignUpModal && <SignUpModal/>}
      {showSignInModal && <SignInModal/>}
      <Footer/>
    </>
  )
}

export default MainPage;
