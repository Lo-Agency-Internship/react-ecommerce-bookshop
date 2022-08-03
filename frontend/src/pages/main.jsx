import SignUpModal from "../components/molecules/signUpModal";
import SignInModal from "../components/molecules/signInModal";
import Navbar from "../components/organisms/navbar";
import { useState } from "react";
// import Images from "../assets/images/backgroundMain.jpg"
import images from "../assets/images/backgroundMain.jpg"

function MainPage() {
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showSignInModal, setShowSignInModal] = useState(false)
    return (
        <div className=" h-screen w-screen flex justify-center items-center" >
            <Navbar setShowSignUp={setShowSignUpModal} setShowSignIn={setShowSignInModal} />
            
            
        
             
            {showSignUpModal && <SignUpModal setOpen={setShowSignUpModal} />}
            {showSignInModal && <SignInModal setOpen={setShowSignInModal} />}

            <img className="h-full w-full" src={images} alt="Img" />
        </div>
    )
}
export default MainPage