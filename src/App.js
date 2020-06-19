import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import AuthPage from "./Containers/AuthPage/authPage";
import HomePage from "./Containers/HomePage/homePage";
import ShopPage from "./Containers/ShopPage/shopPage";
import Header from "./Components/Header/header";

import { auth } from "./firebase/firebase.utils";
import { createUserProfile } from "./firebase/user";
import { setCurrentUser } from "./redux/user/actions";

const App = ({ setCurrentUser }) => {
	useEffect(() => {
		let userRefOnSnapshot = null;
		const authOnAuthStateChanged = auth.onAuthStateChanged(
			async (user) => {
				if (user) {
					const userRef = await createUserProfile(user); //Does not thing when existed
					userRefOnSnapshot = userRef.onSnapshot((snapshot) => {
						console.log(snapshot.data());
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						});
					});
				} else setCurrentUser(null);
			}
		);

		return () => {
			if (userRefOnSnapshot) {
				userRefOnSnapshot();
			}
			authOnAuthStateChanged();
			console.log("unmount");
		};
	}, [setCurrentUser]);
	return (
		<>
			<div className="container">
				<Header
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

export default connect(null, (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
}))(App);
