import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import CheckoutPage from "./Containers/CheckoutPage/checkoutPage";
import AuthPage from "./Containers/AuthPage/authPage";
import HomePage from "./Containers/HomePage/homePage";
import ShopPage from "./Containers/ShopPage/shopPage";
import Header from "./Components/Header/header";

import { auth } from "./firebase/firebase.utils";
import { createUserProfile } from "./firebase/user";
import { setCurrentUser } from "./redux/user/actions";

const App = ({ currentUser, setCurrentUser }) => {
	const [isSticky, setIsSticky] = useState(false);

	const handleScroll = useCallback(() => {
		if (window.pageYOffset > 100) {
			if (!isSticky) {
				setIsSticky(true);
			}
		} else {
			if (isSticky) {
				setIsSticky(false);
			}
		}
	}, [isSticky]);
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
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);
	return (
		<>
			<div className="container">
				<Header
					className={["header", isSticky ? "stick" : "unstick"].join(
						" "
					)}
					signOut={() => {
						auth.signOut();
					}}
				/>
			</div>
			<div className="container">
				<Switch>
					<Route
						path="/auth"
						render={() =>
							currentUser ? <Redirect to="/" /> : <AuthPage />
						}
					></Route>
					<Route path="/checkout" component={CheckoutPage}></Route>
					<Route path="/shop" component={ShopPage}></Route>
					<Route path="/" component={HomePage}></Route>
				</Switch>
			</div>
		</>
	);
};

export default connect(
	({ user }) => ({
		currentUser: user.currentUser,
	}),
	(dispatch) => ({
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	})
)(App);
