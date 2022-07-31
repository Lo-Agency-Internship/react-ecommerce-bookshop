import SignUpModal from "../components/modalSignup";
import SignInModal from "../components/modalsignin";
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