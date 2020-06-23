import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

import { clearCart } from "./redux/cart/action";
import CheckoutPage from "./Containers/CheckoutPage/checkoutPage";
import AuthPage from "./Containers/AuthPage/authPage";
import HomePage from "./Containers/HomePage/homePage";
import ShopPage from "./Containers/ShopPage/shopPage";
import Header from "./Components/Header/header";

import { auth } from "./firebase/firebase.utils";
import { createUserRef } from "./firebase/user";
import { setCurrentUser } from "./redux/user/actions";

const App = ({ clearCart, currentUser, setCurrentUser }) => {
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
		const authOnAuthStateChanged = auth.onAuthStateChanged(
			async (user) => {
				if (user) {
					const userRef = await createUserRef(user); //Create new when existed
					userRef.get().then((snapshot) => {
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						});
					});
				} else setCurrentUser(null);
			}
		);

		return () => {
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
						clearCart();
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
					<Route
						path="/contact"
						component={() => <h1>Contact Info</h1>}
					></Route>
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
		clearCart: () => dispatch(clearCart()),
		setCurrentUser: (user) => dispatch(setCurrentUser(user)),
	})
)(App);
