import React, { useState } from "react";
import FormInput from "../FormInput/formInput";
import CustomButton from "../Custom/Button/button";
import "./signIn.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
const SignIn = () => {
	const [formPassword, setPassword] = useState("");
	const [formEmail, setEmail] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		setPassword("");
		setEmail("");
	};
	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					handleChange={(e) => {
						setEmail(e.target.value);
					}}
					value={formEmail}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					handleChange={(e) => {
						setPassword(e.target.value);
					}}
					value={formPassword}
					label="password"
					required
				/>
				<div className="button-group">
					<CustomButton type="submit"> Sign in </CustomButton>
					<CustomButton
						className="google-button"
						onClick={(e) => {
							e.preventDefault();
							signInWithGoogle();
						}}
					>
						<span className="google-icon"></span>
						<span>{" Sign in with Google"}</span>
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
