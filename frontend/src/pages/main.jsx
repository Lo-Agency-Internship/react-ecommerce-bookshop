import SignUpModal from "../components/molecules/signUpModal";
import SignInModal from "../components/molecules/signInModal";
import Navbar from "../components/organisms/navbar";
import { useState } from "react";

function MainPage() {
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showSignInModal, setShowSignInModal] = useState(false)
    return (
        <>
            <div><Navbar setShowSignUp={setShowSignUpModal} setShowSignIn={setShowSignInModal} />
            </div>

            {showSignUpModal && <SignUpModal setOpen={setShowSignUpModal} />}
            {showSignInModal && <SignInModal setOpen={setShowSignInModal} />}
        </>
    )
}
export default MainPage