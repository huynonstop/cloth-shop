import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	firestore,
	fetchSnapshot,
} from "../../firebase/firebase.utils";
import { updateShop } from "../../redux/shop/action";
import "./homePage.styles.scss";
import WithSpinner from "../../Components/HOC/WithSpinner/withSpinner";
import DirectoryMenu from "../../Components/DirectoryMenu/directoryMenu";

const DirectoryMenuWithSpinner = WithSpinner(DirectoryMenu);
const HomePage = ({ updateShop, collections }) => {
	const [isLoading, setIsLoading] = useState(null);
	useEffect(() => {
		setIsLoading(true);
		const collectionRef = firestore.collection("collections");
		let collectionRefOnSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionData = fetchSnapshot(snapshot);
				updateShop(collectionData);
				setIsLoading(false);
			}
		);
		return () => {
			collectionRefOnSnapshot();
		};
	}, [updateShop]);
	return (
		<div className="home-page">
			<DirectoryMenuWithSpinner
				isLoading={isLoading}
				collections={collections}
			/>
		</div>
	);
};

export default connect(
	(state) => ({
		collections: state.shop.collections,
	}),
	(dispatch) => ({
		updateShop: (collections) => dispatch(updateShop(collections)),
	})
)(HomePage);
