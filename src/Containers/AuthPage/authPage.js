import React from "react";
import "./authPage.styles.scss";
import SignIn from "../../Components/SignIn/signIn";
import SignUp from "../../Components/SignUp/signUp";
const AuthPage = () => {
	return (
		<div className="auth-page">
			<SignIn></SignIn>
			<SignUp></SignUp>
		</div>
	);
};

export default AuthPage;
