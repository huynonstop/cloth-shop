import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import AuthPage from "./Containers/AuthPage/authPage";
import HomePage from "./Containers/HomePage/homePage";
import ShopPage from "./Containers/ShopPage/shopPage";
import Header from "./Components/Header/header";

import { auth } from "./firebase/firebase.utils";
import { createUserProfile } from "./firebase/user";

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		let userRefSub = null;
		const authSub = auth.onAuthStateChanged(async (user) => {
			console.log(user);
			if (user) {
				const userRef = await createUserProfile(user);
				userRefSub = userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				setCurrentUser(null);
			}
		});

		return () => {
			if (userRefSub) {
				userRefSub();
			}
			authSub();
			console.log("unmount");
		};
	}, []);
	return (
		<>
			<div className="container">
				<Header
					currentUser={currentUser}
					signOut={() => {
						auth.signOut();
					}}
				/>
			</div>
			<div className="container">
				<Switch>
					<Route path="/auth" component={AuthPage}></Route>
					<Route path="/shop" component={ShopPage}></Route>
					<Route path="/" component={HomePage}></Route>
				</Switch>
			</div>
		</>
	);
};

export default App;
