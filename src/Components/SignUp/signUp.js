import React, { useState } from "react";
import "./signUp.styles.scss";
import FormInput from "../FormInput/formInput";
import CustomButton from "../Custom/Button/button";

import { auth } from "../../firebase/firebase.utils";
import { createUserProfile } from "../../firebase/user";

const SignUp = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const validationInput = () => {
		if (password !== confirmPassword) {
			return false;
		}
		return true;
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!validationInput()) {
			alert("Wrong input");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfile({ ...user }, { displayName });
			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		} catch (e) {
			console.log(e.message);
		}
	};
	return (
		<div className="sign-up">
			<h2>I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					label="Confirm Password"
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
