import SignUpModal from "../components/molecules/signUpModal";
import SignInModal from "../components/molecules/signInModal";
import { useState } from "react";

function MainPage() {
	const [showSignUpModal] = useState(false)
	const [showSignInModal] = useState(false)
	
	const [] = useState(false)
	return (
		<>
			{showSignUpModal && <SignUpModal/> }
			{showSignInModal && <SignInModal/> }
		</>
	)
}

export default MainPage